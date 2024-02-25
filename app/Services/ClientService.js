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
}

module.exports = new ClientService();
