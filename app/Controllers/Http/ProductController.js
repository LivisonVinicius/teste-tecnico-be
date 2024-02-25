// app/Controllers/Http/ProductController.js

"use strict";

const ProductService = use("App/Services/ProductService");

class ProductController {
  async store({ request, response }) {
    try {
      const productService = new ProductService();
      const productData = request.only(["name", "description", "price"]);
      const product = await productService.createProduct(productData);

      return response.status(201).json({
        message: "Produto criado com sucesso.",
        product,
      });
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao criar o produto.",
        error: error.message,
      });
    }
  }
}

module.exports = ProductController;
