import app from "./app";
import mongoose from "mongoose";
import { config } from "dotenv";

config();

mongoose.connect(
  process.env.MONGO_URI || "mongodb://localhost:27017/customer_manager"
);

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
