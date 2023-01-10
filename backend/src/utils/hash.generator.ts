import bcrypt from "bcryptjs";

export default function hashGenerator(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
