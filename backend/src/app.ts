import express from "express";
import authMiddleware from "./middlewares/auth.middleware";
import errorMiddleware from "./middlewares/error.middleware";
import userRoutes from "./routes/login.routes";

const app = express();

app.use(express.json());

app.use("/login", userRoutes);
app.use(authMiddleware);
app.use("/user", userRoutes);

app.use(errorMiddleware);

export default app;
