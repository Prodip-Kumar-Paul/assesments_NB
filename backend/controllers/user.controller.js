import UserJob from "../models/userjob.model.js";

export const updateJobsStatus = async (req, res, _next) => {
   const userId = req.userId;
   const jobId = req.param.id;
   const { status } = req.body;

   const userjob = await UserJob.findOne({
      userId,
      jobId,
   });

   userjob.status = status;
   await userjob.save(); // update existing Userjob status / create new document in UserJob

   res.status(200).json({
      message: "Success",
      data: userjob,
   });
};
