"use strict";

const Model = use("Model");

class Client extends Model {
  static async createClient(clientData) {
    try {
      const client = await this.create(clientData);
      return client;
    } catch (error) {
      throw new Error("Erro ao criar cliente.");
    }
  }

  address() {
    return this.hasOne("App/Models/Address");
  }

  phones() {
    return this.hasMany("App/Models/Phone");
  }
}

module.exports = Client;
