import exp from "express";
import mongoose from "mongoose";
import { empRoute } from "./API/empApp.js";
import { config } from "dotenv";
import cors from "cors";
config();

const app = exp();
//add cors middleware
console.log("Applying CORS middleware with wildcard origin");
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  }),
);

//body parser middleware
app.use(exp.json());

//DB connection for serverless
const connectDB = async () => {
  if (mongoose.connection && mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.error("CRITICAL ERROR: Database connection failed!", err.message);
    throw err;
  }
};

// Ensure DB is connected before handling API routes
app.use("/emp-api", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection error in middleware:", err);
    res.status(500).json({ message: "error", reason: "Database connection failure: " + err.message });
  }
}, empRoute);

let port = process.env.PORT || 4000;
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
  connectDB().then(() => {
    app.listen(port, () => console.log(`server listening on port ${port}..`));
  }).catch(err => console.log(err));
}

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

export default app;
