import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJson from "../swagger.json";
import customersRoutes from "./routes/customers.routes";
import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/user.routes";
import errorMiddleware from "./middlewares/error.middleware";
import authMiddleware from "./middlewares/auth.middleware";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use(authMiddleware);
app.use("/customers", customersRoutes);

app.use(errorMiddleware);

export default app;
