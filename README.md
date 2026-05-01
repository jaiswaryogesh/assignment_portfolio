# Personal Portfolio Website ✨

Welcome to my full-stack personal portfolio! This project is a modern, highly interactive, and responsive web application designed to showcase my skills, experience, and projects. It features a premium dark-themed UI with smooth animations and a fully functional backend to handle contact form submissions.

## 🚀 Tech Stack Used

This project is built using modern web technologies:

**Frontend:**
- **React.js** (Building user interfaces)
- **Vite** (Lightning-fast development environment and bundler)
- **Tailwind CSS** (Utility-first CSS framework for rapid UI styling)
- **Framer Motion** (For smooth scroll animations and page transitions)
- **Lucide React** (Beautiful and consistent iconography)

**Backend:**
- **Node.js** (JavaScript runtime environment)
- **Express.js** (Fast and minimalist web framework for Node.js)
- **MongoDB & Mongoose** (NoSQL database and Object Data Modeling library)
- **Cors & Dotenv** (For cross-origin requests and environment variable management)

---

## 🛠️ Prerequisites

Before you download and run this project, make sure you have the following installed on your computer:
1. **Node.js** (v18 or higher recommended) - [Download here](https://nodejs.org/)
2. **Git** - [Download here](https://git-scm.com/)
3. **MongoDB Database** - You need a MongoDB connection string (`MONGO_URI`). You can get a free one from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## 💻 How to Download and Run Locally

Follow these step-by-step instructions to get a copy of the project up and running on your local machine.

### Step 1: Clone the Repository
Open your terminal (or Command Prompt / Git Bash) and run the following command to download the code:
```bash
git clone https://github.com/jaiswaryogesh/assignment_portfolio.git
cd assignment_portfolio
```

### Step 2: Setup the Backend
The backend requires its own dependencies and a database connection.

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the required Node.js packages:
   ```bash
   npm install
   ```
3. **Important:** Create a `.env` file inside the `backend` folder and add your MongoDB connection string:
   ```env
   MONGO_URI="your_mongodb_connection_string_here"
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   node index.js
   ```
   *(You should see a message saying "✅ Connected to MongoDB" and "🚀 Server is running on http://localhost:5000")*

### Step 3: Setup the Frontend
Keep the backend terminal running, open a **new** terminal window, and set up the frontend.

1. Navigate to the frontend folder from the main project directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *(The terminal will give you a local link, typically `http://localhost:5173`. Open that link in your browser to view the website).*

---

## 🌐 Deployment Information

This project is configured to be deployed easily on modern cloud platforms:
- **Frontend** is hosted on **Vercel**.
- **Backend** is hosted on **Render**.

When deploying, make sure to:
1. Add the `MONGO_URI` in your Render Environment Variables.
2. Add the `VITE_API_URL` (your Render backend URL) in your Vercel Environment Variables so the contact form can successfully send data to your live database.

---

## 📂 Project Structure

```text
assignment_portfolio/
├── backend/                  # Express server for contact form
│   ├── models/               # MongoDB Database Models
│   ├── index.js              # Main server entry point
│   ├── package.json          # Backend dependencies
│   └── .env                  # (You create this) Secret environment variables
│
└── frontend/                 # React + Vite frontend application
    ├── public/               # Static public assets
    ├── src/
    │   ├── assets/           # Images and static files
    │   ├── components/       # Reusable UI components (Navbar, etc.)
    │   ├── sections/         # Main page sections (Hero, About, Projects, Contact)
    │   ├── App.jsx           # Main React component
    │   ├── index.css         # Global styles (Tailwind)
    │   └── main.jsx          # React entry point
    ├── tailwind.config.js    # Tailwind configuration
    └── package.json          # Frontend dependencies
```

---
*Created by Yogesh Jaiswal.*
