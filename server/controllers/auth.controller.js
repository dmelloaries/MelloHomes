import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";
import { z } from "zod";

// Schema for signup body validation
const signupBody = z.object({
  username: z.string().min(6, "Minimum 6 letters required"),
  email: z.string().email(),
  password: z.string().min(6, "Minimum 6 letters required"),
});


export const signup = async (req, res, next) => {
  const { success, error } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: error.errors[0].message,
    });
  }

  const { username, email, password } = req.body;

  try {
    // Check if username already exists
    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(409).json({ success: false, message: "Username already taken" });
    }

    // Check if email already exists
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(409).json({ success: false, message: "Email already taken" });
    }

    // Hash the password and create a new user
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};

// Signin function
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ success: false, message: 'User not found!' });
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ success: false, message: 'Wrong credentials!' });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
    const { password: pass, ...rest } = validUser._doc;

    res.cookie('access_token', token, { httpOnly: true, sameSite: 'strict' })
      .status(200)
      .json({ success: true, user: rest });
  } catch (error) {
    next(error);
  }
};


//Google auth 
export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);

    } else {
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) , email: req.body.email, password: hashedPassword, avatar: req.body.photo });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);

    }
  } catch (error) {
    next(error)
  }
}