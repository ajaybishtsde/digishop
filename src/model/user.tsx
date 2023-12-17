import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    required: [true, "name field is required"],
    type: Schema.Types.String,
  },
  email: {
    required: [true, "email field is required"],
    type: Schema.Types.String,
  },
  password: {
    required: false,
    type: Schema.Types.String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
