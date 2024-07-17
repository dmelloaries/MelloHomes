import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
dotenv.config();

mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("error in connecting");
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);