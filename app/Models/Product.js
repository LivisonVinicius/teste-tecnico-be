"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  static async findOrFail(id) {
    const product = await this.find(id);

    if (!product) {
      throw new Error("Produto não encontrado.");
    }

    return product;
  }
}

module.exports = Product;
