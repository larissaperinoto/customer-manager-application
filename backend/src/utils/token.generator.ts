import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export default function tokenGenerator(username: string) {
  const secret = process.env.JWT_SECRET || "mysecret";

  const token = jwt.sign({ username }, secret, {
    expiresIn: "7d",
    algorithm: "HS256",
  });

  return token;
}
