import { model, Schema } from "mongoose";

const JobSchema = new Schema({
   title: String,
   description: String,
   location: String,
   deadline: Date,
});

const Job = model("Job", JobSchema);

export default Job;
