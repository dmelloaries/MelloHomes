import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type: String,
        default: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"
      }
    
},{timestamps:true})

const User=mongoose.model('User',userSchema)

export default User;