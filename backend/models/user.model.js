import { model, Schema } from "mongoose";

const UserSchema = new Schema({
   name: String,
   phoneNo: String,
   password: String, // plain text password for time being
   email: { type: String, unique: true },
   role: {
      type: String,
      enum: ["ADMIN", "USER"],
      defaultValue: "USER",
   },
});

const User = model("User", UserSchema);

export default User;
