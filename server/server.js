
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://dev-portfolio-teal-kappa.vercel.app"
];

app.use(cors({
  origin: allowedOrigins
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Contact form schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true }
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running!"
  });
});

// Save contact messages
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email and message."
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email."
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    res.status(201).json({
      success: true,
      message: "Your message has been saved successfully!",
      id: contact._id
    });
  } catch (error) {
    console.error("Contact error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to save your message."
    });
  }
});

// Resume downloads
app.get("/api/resume/:format", (req, res) => {
  const resumes = {
    pdf: {
      file: "resume.pdf",
      type: "application/pdf"
    },
    docx: {
      file: "resume.docx",
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }
  };

  const resume = resumes[req.params.format];

  if (!resume) {
    return res.status(404).json({
      success: false,
      message: "Format must be pdf or docx."
    });
  }

  const filePath = path.join(__dirname, "resumes", resume.file);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: `Resume file missing: ${resume.file}`
    });
  }

  res.download(filePath, resume.file, {
    headers: { "Content-Type": resume.type }
  });
});

// Start server and connect to MongoDB when configured
async function startServer() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected successfully!");
    } catch (error) {
      console.error("MongoDB connection failed:", error.message);
      process.exit(1);
    }
  } else {
    console.warn(
      "MONGODB_URI not configured. Contact API will not save messages."
    );
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
