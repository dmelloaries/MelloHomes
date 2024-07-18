import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import {z} from "zod";


const signupBody = z.object({
    username: z.string().min(6, "Minimum 6 letters required"),
    email: z.string().email(),
    password: z.string().min(6, "Minimum 6 letters required")
  });

export const signup = async (req, res, next) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs / username & password:= Minimum 6 letters required "
        })
    }
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
