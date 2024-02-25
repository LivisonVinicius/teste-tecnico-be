"use strict";

const Model = use("Model");

class Address extends Model {
  static async createAddress(clientId, addressData) {
    try {
      const address = await this.create({
        client_id: clientId,
        ...addressData,
      });
      return address;
    } catch (error) {
      throw new Error("Erro ao criar endereço.");
    }
  }

  client() {
    return this.belongsTo("App/Models/Client");
  }
}

module.exports = Address;
