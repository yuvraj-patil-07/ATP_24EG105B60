# Week 7 - MERN Blogging Platform Capstone 

This week we built a full-stack Capstone Project: a blogging platform where authors can write and publish articles, and users can read them. It is built using the MERN stack (MongoDB, Express, React, Node.js).

---

##  Live Deployment
- ** URL:** https://frontend-eta-six-29.vercel.app/

---

##  Key Features
- **Express REST API:** Backend endpoints to manage articles, users, and administrative functions.
- **User Authentication:** Secure signup and login flow using JWT (JSON Web Tokens).
- **Article Writing:** Authors can create, edit, and update articles dynamically.
- **Image Uploads:** Handled using Multer and hosted online using Cloudinary.
- **Database Integration:** Remote cloud database connectivity using MongoDB Atlas.

---

##  Project Structure
- **`Backend-BlogApp`**: The backend server application.
  - **`APIs/`**: API routes for users, authors, and admins.
  - **`models/`**: MongoDB schemas with Mongoose document validation.
  - **`server.js`**: Main server script that initializes middlewares and routes.
- **`Frontend-BlogApp`**: The React frontend application.
  - **`components/`**: Reusable parts of the page (forms, navbar, cards).
  - **`stores/`**: State management to track logged-in users and page states.
