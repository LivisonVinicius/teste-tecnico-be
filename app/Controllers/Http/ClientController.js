"use strict";

const ClientService = use("App/Services/ClientService");

class ClientController {
  async store({ request, response }) {
    try {
      const clientData = request.only(["name", "cpf"]);

      const isCpfAlreadyRegistered = await ClientService.isCpfRegistered(
        clientData.cpf
      );
      if (isCpfAlreadyRegistered) {
        return response.status(409).json({
          message: "CPF já cadastrado. Por favor, escolha outro CPF.",
        });
      }

      const client = await ClientService.createClient(clientData);

      return response
        .status(201)
        .json({ message: "Cliente criado com sucesso.", client });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Erro ao criar cliente.", error: error.message });
    }
  }

  async update({ params, request, response }) {
    const { id } = params;

    const newData = request.only(["name", "cpf"]);

    try {
      const updatedClient = await ClientService.updateClient(id, newData);
      return response.status(200).json({
        message: "Cliente atualizado com sucesso",
        client: updatedClient,
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Erro ao atualizar cliente", error: error.message });
    }
  }

  async index({ response }) {
    try {
      const clients = await ClientService.getAllClients();

      const clientsData = clients.map((client) => ({
        id: client.id,
        name: client.name,
        cpf: client.cpf,
      }));

      return response.json(clientsData);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Erro ao listar clientes.", error: error.message });
    }
  }
}

module.exports = ClientController;
