import express from "express";
import { loginController, signupController } from "../controllers/auth.controller.js";
import { isUser } from "../middleware/isUser.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { getJobApplicants } from "../controllers/admin.controller.js";
import { updateJobsStatus } from "../controllers/user.controller.js";
const router =  express();

router.post("/login", loginController);
router.post("/signup", signupController);

router.put("/jobs/:id", isUser, updateJobsStatus); 
router.get("/jobs/:id/applications", isUser,isAdmin, getJobApplicants);  // admin routes


export default router;