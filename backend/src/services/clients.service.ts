import Client from "../models/Client.model";

class ClientService {
  async findAll() {
    return await Client.find({});
  }
}

export default new ClientService();
