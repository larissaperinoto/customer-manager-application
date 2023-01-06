import express from "express";
import userRoutes from "./routes/login.routes";

const app = express();

app.use(express.json());

app.use("/login", userRoutes);

export default app;
