# DevPortfolio — Personal Developer Portfolio

A modern, responsive personal portfolio built with **React, Vite, Express.js, and MongoDB**. It showcases my background, technical skills, projects, education, and provides a contact form for visitors to connect with me.

## ✨ Features

- Responsive portfolio design
- Home, About, Skills, Projects, Education, and Contact sections
- Dark and light theme toggle
- Animated hero section with a custom avatar
- Contact form connected to a MongoDB database
- Express.js REST API for handling contact submissions
- PDF resume download
- Interactive UI with Lucide React icons

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS
- Lucide React

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

## 📁 Project Structure

```text
DevPortfolio/
├── client/          # React frontend
├── server/          # Express backend
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB database, such as MongoDB Atlas

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd DevPortfolio
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Start the frontend

Open a terminal and run:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

### 3. Configure and start the backend

Open a second terminal:

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory and configure the required environment variables:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Use your own MongoDB connection string. Never publish real credentials.

Start the backend:

```bash
npm run dev
```

Make sure the frontend's configured API URL and the backend CORS settings match your local frontend URL.

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend status |
| POST | `/api/contact` | Submit and save a contact message |
| GET | `/api/resume/pdf` | Download the PDF resume |
| GET | `/api/resume/docx` | DOCX resume endpoint; availability to be verified |

The contact form sends submissions to the backend, which stores them in MongoDB.

## 🔒 Security

- Keep `.env` files and database credentials private.
- Never commit secrets, API keys, or passwords to GitHub.
- Configure environment variables separately for local development and deployment.

## 👨‍💻 Author

**Devansh Srivastava**  
B.Tech — Computer Science and Engineering  
JK Lakshmipat University, Jaipur
