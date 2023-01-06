import ILogin from "./ILogin";

export default interface IUser extends ILogin {
  id?: string;
  email: string;
}
