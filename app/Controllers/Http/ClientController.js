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
}

module.exports = ClientController;
