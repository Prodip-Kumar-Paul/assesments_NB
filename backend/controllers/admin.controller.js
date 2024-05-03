import UserJob from "../models/userjob.model.js";

export const getJobApplicants = async (req, res, _next) => {
   const userId = req.userId;
   const jobId = req.param.id;

   const userjob = await UserJob.findOne({
      userId,
      jobId,
   }).populate("userId", "jobId");

   res.status(200).json({
      message: "Success",
      data: userjob,
   });
};
