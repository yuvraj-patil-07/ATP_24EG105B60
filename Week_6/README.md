# Week 6 - Employee Portal Application 💼

This week we built a complete full-stack web application! It features a React frontend (built with Vite) and a Node.js/Express backend that saves data to MongoDB.

---

## 🔗 Live Deployment
- **Deployment URL:** [https://emp-app-frontend-v2.vercel.app/](https://emp-app-frontend-v2.vercel.app/)

---

## 🛠️ Technology Stack
- **Frontend:** React (Vite), React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, CORS, dotenv
- **Database:** MongoDB (Mongoose)

---

## 📂 Project Structure
```text
employee-demo-app/
├── backend/
│   ├── .env           # Environment configurations
│   ├── package.json   # Backend dependencies
│   └── server.js      # Main API server
└── frontend/
    ├── package.json   # Frontend dependencies
    ├── vite.config.js # Vite configurations
    └── src/           # React frontend source files
```

---

## ⚙️ How to Run Locally

### 1. Run Backend
1. Open a terminal and go to the backend folder:
   ```bash
   cd backend
   ```
2. Install the backend packages:
   ```bash
   npm install
   ```
3. Create a `.env` file inside the `backend` folder and add:
   ```env
   PORT=3000
   DB_URL=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### 2. Run Frontend
1. Open another terminal and go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the frontend packages:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser!
