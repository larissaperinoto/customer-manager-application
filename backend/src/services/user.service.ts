import IUser from "../interfaces/ILogin";
import ILogin from "../interfaces/ILogin";
import UserModel from "../models/User.model";
import ErrorExtent from "../utils/error.exception";
import tokenGenerator from "../utils/token.generator";

class User {
  async login({ username, password }: ILogin) {
    const userExists = await UserModel.findOne({ username, password });

    if (userExists) return tokenGenerator(username);

    throw new ErrorExtent(401, "Unauthorized user");
  }

  async create({ username, email, password }: IUser) {
    await UserModel.create({
      username,
      email,
      password,
    });
    return `${username} created successfully`;
  }
}

export default new User();
