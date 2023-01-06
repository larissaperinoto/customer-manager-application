import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: Number,
    require: true,
    select: false,
  },
});

export default mongoose.model("User", User);
