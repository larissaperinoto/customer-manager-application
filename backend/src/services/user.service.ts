import ILogin from "../interfaces/ILogin";
import UserModel from "../models/User.model";
import ErrorExtent from "../utils/error.exception";

class User {
  async login({ username, password }: ILogin) {
    const userExists = await UserModel.findOne({ username, password });

    if (userExists) return "token";

    throw new ErrorExtent(401, "Unauthorized user");
  }
}

export default new User();
