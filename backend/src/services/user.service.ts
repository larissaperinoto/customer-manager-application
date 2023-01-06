import ILogin from "../interfaces/ILogin";
import UserModel from "../models/User.model";

class User {
  async login({ username, password }: ILogin) {
    const userExists = await UserModel.findOne({ username, password });

    if (userExists) return "token";
  }
}

export default new User();
