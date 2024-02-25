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

    if (!client) {
      throw new Error("Cliente não encontrado");
    }

    client.merge(newData);
    await client.save();

    return client;
  }

  async getAllClients() {
    try {
      const clients = await Client.query().orderBy("id").fetch();
      return clients.toJSON();
    } catch (error) {
      throw new Error("Erro ao buscar clientes.");
    }
  }
}

module.exports = new ClientService();
