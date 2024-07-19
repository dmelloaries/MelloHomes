import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";

// Initialize express app
const app = express();

// Configure environment variables
dotenv.config();

// Middleware configuration
app.use(cors({
  origin: 'http://localhost:5173', //have to Replace with frontend URL post deployment
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json()); // Middleware to parse JSON bodies

// Database connection
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Define routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
