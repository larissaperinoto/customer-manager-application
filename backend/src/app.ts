import express from "express";

const app = express();

app.use(express.json());

app.get("/teste", (_req, res) => res.send("Hello World"));

export default app;
