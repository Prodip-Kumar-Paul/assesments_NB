import express from "express";
import {
   getAllJobsController,
   getJobInfo,
   postJobsController,
} from "../controllers/job.controller.js";
import { isUser } from "../middleware/isUser.js";
import { isAdmin } from "../middleware/isAdmin.js";
const router = express();

router.post("/jobs", isUser, isAdmin, postJobsController); // only admin can post job
router.get("/jobs", isUser, getAllJobsController);
router.get("/jobs/:id", isUser, getJobInfo); 

export default router;
