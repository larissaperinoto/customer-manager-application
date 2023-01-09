export default interface IClient {
  _id?: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  cpf: string;
  createdAt?: Date;
}
