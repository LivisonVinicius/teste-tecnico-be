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

  async getProductById(productId) {
    const product = await Product.findOrFail(productId);
    return product;
  }
  async deleteProduct(productId) {
    const product = await Product.findOrFail(productId);

    if (!product) {
      return null;
    }

    product.deleted_at = new Date();
    await product.save();

    return product;
  }

  async getAllProducts() {
    const products = await Product.query().orderBy("name").fetch();

    if (!products || products.rows.length === 0) {
      throw new Error("Nenhum produto encontrado.");
    }

    return products.rows.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
    }));
  }
}

module.exports = ProductService;
