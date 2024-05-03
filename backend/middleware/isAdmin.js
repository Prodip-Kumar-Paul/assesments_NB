import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAdmin = async (req, res, next) => {
   const authHeader = req.headers["authorization"];
   if (!authHeader) {
      res.status(400).json("Invalid Info");
   }
   const token = authHeader.split(" ")[1];
   const decode = jwt.verify(token, process.env.JWT_SECRET);
   const { userId, role } = decode;
   const user = await User.findById(userId).lean();
   if (!user) {
      res.status(400).json("Invalid User");
   }

   if (role !== user.role) {
      res.status(400).json("Invalid Access");
   }
   req.userId = userId;
   next();
};
