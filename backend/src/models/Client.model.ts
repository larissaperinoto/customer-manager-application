import mongoose from "mongoose";

const Client = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  cpf: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Client", Client);
