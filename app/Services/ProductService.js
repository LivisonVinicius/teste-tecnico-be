"use strict";

const Product = use("App/Models/Product");

class ProductService {
  async createProduct(data) {
    const product = await Product.create(data);
    return product;
  }

  async updateProduct(productId, productData) {
    const product = await Product.findOrFail(productId);

    if (!product) {
      throw new Error("Produto não encontrado.");
    }

    product.merge(productData);
    await product.save();

    return product;
  }
}

module.exports = ProductService;
