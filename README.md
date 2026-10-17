# DevPortfolio — Personal Developer Portfolio

A modern, responsive personal portfolio built with **React, Vite, Node.js, Express.js, and MongoDB**. It showcases my background, technical skills, projects, education, and certifications, with a contact form that allows visitors to connect with me.

**Live Website:** https://devanshsrivastava.vercel.app/  
**GitHub Repository:** https://github.com/devanshsrivastava1818-ux/DevPortfolio

## ✨ Features

- Responsive personal portfolio design
- Hero, About, Skills, Projects, Education, Certifications, and Contact sections
- Dark and light theme toggle
- Animated hero section with a custom avatar
- Interactive UI with Lucide React icons and animations
- Contact form connected to an Express.js REST API
- Contact submissions stored in MongoDB using Mongoose
- PDF resume download through the backend
- Backend health-check endpoint
- Secure environment-variable configuration

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS
- Lucide React
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

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
- Git

### 1. Clone the repository

```bash
git clone https://github.com/devanshsrivastava1818-ux/DevPortfolio.git
cd DevPortfolio
```

### 2. Set up the frontend

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

### 3. Configure the backend

Open a second terminal from the project root:

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory and configure the required variables:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Replace the MongoDB placeholder with your own connection string. Keep database credentials private.

**Important:** Configure the frontend API URL and backend CORS settings to match your local development environment. If your frontend runs on a different port, update the relevant configuration accordingly.

### 4. Start the backend

From the `server/` directory, run:

```bash
npm run dev
```

The backend should start on the configured port.

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend status |
| POST | `/api/contact` | Submit a contact message |
| GET | `/api/resume/pdf` | Download the PDF resume |
| GET | `/api/resume/docx` | DOCX resume endpoint; availability must be verified |

The contact form submits visitor details to the Express.js API, which validates the data and stores successful submissions in MongoDB.

## 🌐 Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

Live portfolio: https://devanshsrivastava.vercel.app/

The frontend and backend use environment variables for deployment-specific configuration. The backend API URL and CORS configuration must match the deployed frontend origin.

## 🔒 Security

- Never commit `.env` files, database credentials, API keys, or passwords to GitHub.
- Keep `.env` in `.gitignore`.
- Configure production environment variables through the hosting provider's dashboard.
- Use your own credentials when running the project locally.

## 👨‍💻 Author

**Devansh Srivastava**  
B.Tech — Computer Science and Engineering  
JK Lakshmipat University, Jaipur
