import express from "express";
import clientsRoutes from "./routes/clients.routes";
import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/user.routes";
import errorMiddleware from "./middlewares/error.middleware";
import authMiddleware from "./middlewares/auth.middleware";

const app = express();

app.use(express.json());

app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use(authMiddleware);
app.use("/client", clientsRoutes);

app.use(errorMiddleware);

export default app;
