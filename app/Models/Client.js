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

  static async find(id) {
    this.query().where("id", id).first();
    return await this.query().where("id", id).first();
  }

  address() {
    return this.hasOne("App/Models/Address");
  }

  phones() {
    return this.hasMany("App/Models/Phone");
  }

  sales() {
    return this.hasMany("App/Models/Sale");
  }
}

module.exports = Client;
