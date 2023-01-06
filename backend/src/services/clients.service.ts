import IClient from "../interfaces/IClient";
import Client from "../models/Client.model";

class ClientService {
  async findAll() {
    return await Client.find({});
  }

  async create({ name, email, phoneNumber, address, cpf }: IClient) {
    const client = await Client.create({
      name,
      email,
      phoneNumber,
      address,
      cpf,
    });
    return client;
  }
}

export default new ClientService();
