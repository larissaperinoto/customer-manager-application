import IUser from "../interfaces/ILogin";
import ILogin from "../interfaces/ILogin";
import UserModel from "../models/User.model";
import ErrorExtent from "../utils/error.exception";
import hashGenerator from "../utils/hash.generator";
import tokenGenerator from "../utils/token.generator";
import bcrypt from "bcryptjs";

class User {
  async login({ username, password }: ILogin) {
    const userExists = await UserModel.findOne({
      username,
    });

    if (
      !userExists ||
      !bcrypt.compareSync(password, userExists.password as string)
    ) {
      throw new ErrorExtent(401, "Unauthorized user");
    }

    return tokenGenerator(username);
  }

  async create({ username, email, password }: IUser) {
    const passwordhashed = hashGenerator(password);
    await UserModel.create({
      username,
      email,
      password: passwordhashed,
    });
    return `${username} created successfully`;
  }
}

export default new User();
