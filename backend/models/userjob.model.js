import mongoose, {Schema, model} from "mongoose";

const UserJobSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
   },
   JobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
   },
   status: {
      type: String,
      enum: ["APPLIED", "SAVED"],
   },
});

const UserJob = model("UserJob", UserJobSchema);

export default UserJob;
