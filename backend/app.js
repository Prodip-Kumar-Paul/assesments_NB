import express from "express";
import bodyParser from "body-parser";
import { connect } from "mongoose";
import cors from "cors";

import User from "./models/user.model.js";
import UserRoutes from "./Routes/User.routes.js";
import JobRoutes from "./Routes/Job.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", JobRoutes);
app.use("/auth", UserRoutes);

// autoCreateAdmin on server startup
(async () => {
   const adminExist = await User.findOne({ role: "ADMIN" }).lean();
   if (!adminExist) {
      const admin = await User.create({
         name: "Admin",
         password: "Admin@123",
         role: "ADMIN",
      });
      console.log(admin);
   }
})();

connect(process.env.DB_URL)
   .then(() => {
      console.log("connected to the DB");
      app.listen(process.env.PORT, () => {
         console.log(`Server started on port ${process.env.PORT}`);
      });
   })
   .catch((err) => {
      console.error(err);
   });
