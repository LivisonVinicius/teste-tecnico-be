"use strict";

const Model = use("Model");

class Phone extends Model {
  static async createPhone(clientId, phoneNumber) {
    try {
      const phone = await this.create({
        client_id: clientId,
        phone_number: phoneNumber,
      });
      return phone;
    } catch (error) {
      throw new Error("Erro ao criar telefone.");
    }
  }

  client() {
    return this.belongsTo("App/Models/Client");
  }
}

module.exports = Phone;
