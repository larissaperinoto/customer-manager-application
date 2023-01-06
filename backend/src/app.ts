import express from "express";
import errorMiddleware from "./middlewares/error.middleware";
import userRoutes from "./routes/login.routes";

const app = express();

app.use(express.json());

app.use("/login", userRoutes);
app.use("/user", userRoutes);

app.use(errorMiddleware);

export default app;
