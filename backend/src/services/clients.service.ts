import { ObjectId } from "mongodb";
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

  async updateById(
    id: string,
    { name, email, phoneNumber, address, cpf }: IClient
  ) {
    await Client.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { name, email, phoneNumber, address, cpf },
      }
    );
  }

  async delete(id: string) {
    await Client.deleteOne({ _id: new ObjectId(id) });
  }
}

export default new ClientService();
