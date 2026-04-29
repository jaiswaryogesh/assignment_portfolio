# Premium Portfolio Website

A visually stunning, high-performance personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. 
Features an Express backend for the contact form.

## 🚀 Quick Start Guide

You will need two separate terminal windows to run both the frontend and the backend.

### 1. Start the Backend

Open your first terminal and run:

```bash
cd backend
npm install
npm start
```

> **Note for Windows PowerShell Users:** If you get an error saying `npm : File ... cannot be loaded because running scripts is disabled`, it means your PowerShell execution policy is restricting scripts. You can bypass this by opening a standard **Command Prompt (cmd)** instead, or by running:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
> ```

*(Note: If you don't have a start script, just run `node index.js`. The server will run on port 5000).*

### 2. Start the Frontend

Open your second terminal and run:

```bash
cd frontend
npm install
npm run dev
```

> **Note for Windows PowerShell Users:** Again, if `npm` is blocked in PowerShell, please use a standard **Command Prompt (cmd)** or apply the execution policy fix above.

The frontend will start typically on `http://localhost:5173`. Open this URL in your browser to view the portfolio.

## 📁 Project Structure

```
.
├── backend/            # Express server for contact form
│   ├── index.js        # Main server file
│   └── package.json
└── frontend/           # React + Vite frontend
    ├── public/
    ├── src/
    │   ├── assets/     # Images, icons
    │   ├── components/ # Reusable components (Navbar)
    │   ├── sections/   # Main sections (Hero, About, Projects, Experience, Contact)
    │   ├── App.jsx     # Main layout and preloader
    │   ├── index.css   # Global Tailwind styles
    │   └── main.jsx    # React entry point
    ├── tailwind.config.js
    └── package.json
```

## 🎨 Features
- **Modern UI**: Dark mode default with smooth gradients and glassmorphism.
- **Animations**: Page transitions, scroll-linked animations, and interactive hover states using Framer Motion.
- **Responsive**: Fully mobile-optimized layout.
- **Backend Ready**: Express server ready to receive contact form submissions.

Enjoy your new premium portfolio!
