import Job from "../models/job.model.js";

export const postJobsController = async (req, res, _next) => {
   const { title, description, location, deadline } = req.body;

   const newJob = await Job.create({
      title,
      description,
      location,
      deadline: new Date(deadline),
   });

   res.status(201).json({
      message: "Job Created Successfully",
      data: newJob,
   });
};

export const getAllJobsController = async (req, res, _next) => {
   const filter = req.query;
   const jobs = await Job.find({}).lean();
   res.status(200).json({
      message: "Success",
      data: jobs,
   });
};

export const getJobInfo = async (req, res, _next) => {
  const filter = req.query;
  const jobs = await Job.findById(req.param.id).lean();
  res.status(200).json({
     message: "Success",
     data: jobs,
  });
};
