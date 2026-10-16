# DevPortfolio

A personal developer portfolio built using React, Express.js, and MongoDB.

## Features
- Responsive portfolio website
- About, Skills, Projects, and Education sections
- Dark and Light mode
- Contact form integrated with MongoDB
- Express.js REST API
- PDF resume download

## Tech Stack
**Frontend:** React, Vite, JavaScript, CSS, Lucide React

**Backend:** Node.js, Express.js, MongoDB, Mongoose

## Project Structure
- `client/` — React frontend
- `server/` — Express backend
- `.gitignore` — Files excluded from Git

## Setup Instructions

### Frontend
Open Terminal and run:

```bash
cd client
npm install
npm run dev
```

### Backend
Open another Terminal window and run:

```bash
cd server
npm install
npm run dev
```

Configure the required environment variables in `server/.env` before starting the backend.

## API Endpoints
- `GET /api/health` — Check backend status
- `POST /api/contact` — Submit a contact message
- `GET /api/resume/pdf` — Download PDF resume
- `GET /api/resume/docx` — DOCX resume endpoint

## Security
Never upload `.env` files or database credentials to GitHub.

## Author
Developer Portfolio Project