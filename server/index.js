import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose.connect(process.env.Mongo_URL).then(()=>{

    console.log("Database connected");

}).catch((err)=>{
    console.log("error in connecting");

})


const app=express();

app.listen(3000,()=>{
    console.log("server listening on port 3000");

})