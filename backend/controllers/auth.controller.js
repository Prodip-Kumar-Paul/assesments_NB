import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signupController = async (req, res, _next) => {
   const { name, phoneNo, email, password } = req.body;
   console.log(req.body);

   const newUser = await User.create({
      name,
      phoneNo,
      email,
      password, // storing plain password
   });

   const token = jwt.sign(
      {
         userId: newUser._id,
         role: "USER",
      },
      process.env.JWT_SECRET
   );

   res.status(201).json({
      message: "User Created Successfully",
      token,
   });
};

export const loginController = async (req, res, _next) => {
   const { email, password } = req.body;

   const user = await User.findOne({
      email,
   }).lean();

   if (!user) {
      return res.status(400).json({
         message: "No user found",
      });
   }

   /**
    *  Plain text password checking for Time
    */

   if (password !== user.password) {
      return res.status(401).json({
         message: "Wrong Pasword",
      });
   }

   const token = jwt.sign(
      {
         userId: user._id,
         type: "USER",
      },
      process.env.JWT_SECRET
   );

   res.status(201).json({
      message: "User Created Successfully",
      data: token,
   });
};
