# Employee Portal Demonstration

A comprehensive full-stack web solution powered by React (Vite) on the client side and Node.js/Express on the server, leveraging MongoDB for data persistence.

## 📂 Directory Architecture

```text
employee-demo-app/
├── backend/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
```

## ⚙️ System Requirements
- Node.js runtime active on your machine
- Local MongoDB instance or active Atlas cluster URI

---

## ⚡ Local Development Guide

### Fast Launch (Running Concurrently)
1. Install the `concurrently` package in the root directory:
   ```bash
   npm install concurrently --save-dev
   ```
2. Include the execution script within your root `package.json`:
   ```json
   "scripts": {
     "dev": "concurrently \"cd backend && node server.js\" \"cd frontend && npm run dev\""
   }
   ```
3. Initialize both frontend and backend services simultaneously:
   ```bash
   npm run dev
   ```

### Standard Launch (Separate Terminal Setup)

#### 1. Configuring the Backend
1. Launch a terminal window and change directory into `backend`:
   ```bash
   cd backend
   ```
2. Download and install all required modules:
   ```bash
   npm install
   ```
3. Generate a `.env` configuration file in `backend` with required keys:
   ```env
   PORT=3000
   DB_URL=your_mongodb_connection_string
   ```
4. Spin up the Express server:
   ```bash
   node server.js
   ```
   *(The API service listens on `http://localhost:3000`)*

#### 2. Configuring the Frontend
1. Open a separate terminal window and move into the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Download and install all client dependencies:
   ```bash
   npm install
   ```
3. Launch the Vite development application:
   ```bash
   npm run dev
   ```
   *(The UI application loads at `http://localhost:5173`)*

---

## 🛠️ Step-by-Step Construction Guide

### 1. Root Workspace Initialization
```bash
mkdir employee-demo-app
cd employee-demo-app
```

### 2. Building the API Service
1. Create the server directory and initialize package management:
   ```bash
   mkdir backend
   cd backend
   npm init -y
   ```
2. Add essential server dependencies:
   ```bash
   npm install express mongoose dotenv cors
   ```
3. Modify `package.json` to allow modern ES module syntax:
   ```json
   "type": "module"
   ```
4. Create `server.js` and configure the fundamental Express endpoints:
   ```javascript
   import express from "express";
   import cors from "cors";
   import dotenv from "dotenv";

   dotenv.config();

   const app = express();
   app.use(express.json());
   app.use(cors());

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   ```

### 3. Building the Client Application
1. Return to the root workspace and generate the Vite React project:
   ```bash
   cd ..
   npm create vite@latest frontend -- --template react
   ```
2. Install default template packages:
   ```bash
   cd frontend
   npm install
   ```
3. Include routing, HTTP client, form handling, and styling libraries:
   ```bash
   npm install react-router-dom axios react-hook-form tailwindcss @tailwindcss/vite
   ```
4. Execute the development server to test the interface:
   ```bash
   npm run dev
   ```
LIVE DEPLOYMENT: https://emp-app-frontend-v2.vercel.app/
