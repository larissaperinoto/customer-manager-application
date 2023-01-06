import app from "./app";
import { config } from "dotenv";

config();

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
