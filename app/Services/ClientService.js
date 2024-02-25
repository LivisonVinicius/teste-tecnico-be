"use strict";

const Client = use("App/Models/Client");

class ClientService {
  async isCpfRegistered(cpf) {
    const existingClient = await Client.findBy("cpf", cpf);
    return !!existingClient;
  }

  async createClient(clientData) {
    const client = await Client.create(clientData);
    return client;
  }

  async updateClient(id, newData) {
    const client = await Client.find(id);
    console.log(client);

    if (!client) {
      throw new Error("Cliente não encontrado");
    }

    client.merge(newData);
    await client.save();

    return client;
  }
}

module.exports = new ClientService();
