"use strict";

const Product = use("App/Models/Product");

class ProductService {
  async createProduct(data) {
    const product = await Product.create(data);
    return product;
  }
}

module.exports = ProductService;
