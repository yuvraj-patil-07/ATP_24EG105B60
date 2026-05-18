# MERN Blogging Platform - Capstone Project

This repository houses our comprehensive Week 7 full-stack application, seamlessly integrating frontend client architecture with robust backend API services.
Built atop the MERN technology stack, utilizing MongoDB, Express.js, React, and Node.js.

---

## Core Architectural Features:

- Developed RESTful API endpoints using Express.js to bridge client requests and database storage.
- Constructed an intuitive, component-based user interface using React for dynamic article rendering.
- Implemented secure user authentication and authorization routines backed by JSON Web Tokens (JWT).
- Empowered verified authors with publishing workflows to compose, format, and modify articles.
- Persisted all user accounts and published articles securely within remote MongoDB cloud clusters.
- Integrated Multer and Cloudinary services to handle multipart file uploads and media asset hosting.

---

## Repository Structure:

- Backend-BlogApp : The server-side application managing API logic, middleware, and database connections.
    - APIs : Dedicated routing modules handling user, author, and administrative endpoints.
    - models : Mongoose ODM object definitions establishing strict document validation rules.
    - server.js : Primary entry point initializing Express middleware and listening on port 5000.
- Frontend-BlogApp : The client-side single-page application rendering the visual web presentation.
    - components : Reusable interface building blocks for navigation, authentication, and content creation.
    - stores : Global state management containers tracking active user sessions and interface states.

---

## Summary of Key Competencies:

- Mastered end-to-end full-stack integration while debugging cross-origin resource sharing (CORS) configurations.
- Enforced route protection using customized authentication middleware to restrict unauthorized access.
- Deployed external media management workflows using scalable third-party cloud object storage.
- Finalized production-grade deployment configurations ensuring complete system reliability.
