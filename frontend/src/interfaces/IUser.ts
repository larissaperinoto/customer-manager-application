export default interface IUser {
  name: { first: string; last: string };
  picture: { large: string };
  email: string;
  login: { username: string };
  dob: { age: string };
}
