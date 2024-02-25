"use strict";

const ProductService = use("App/Services/ProductService");

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

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

  async update({ params, request, response }) {
    try {
      const productId = params.id;
      const productData = request.only(["name", "description", "price"]);

      const productService = new ProductService();
      const product = await productService.updateProduct(
        productId,
        productData
      );

      return response
        .status(200)
        .json({ message: "Produto atualizado com sucesso.", product });
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao atualizar o produto.",
        error: error.message,
      });
    }
  }

  async show({ params, response }) {
    try {
      const productId = params.id;

      const productService = new ProductService();
      const product = await productService.getProductById(productId);

      if (!product) {
        return response
          .status(404)
          .json({ message: "Produto não encontrado." });
      }

      return response.status(200).json(product);
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao buscar detalhes do produto.",
        error: error.message,
      });
    }
  }

  async destroy({ params, response }) {
    try {
      const productId = params.id;

      const productService = new ProductService();
      const deletedProduct = await productService.deleteProduct(productId);

      if (!deletedProduct) {
        return response
          .status(404)
          .json({ message: "Produto não encontrado." });
      }

      return response
        .status(200)
        .json({ message: "Produto excluído com sucesso." });
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao excluir o produto.",
        error: error.message,
      });
    }
  }
  async index({ response }) {
    try {
      const productList = await this.productService.getAllProducts();

      return response.status(200).json(productList);
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao listar os produtos.",
        error: error.message,
      });
    }
  }
}

module.exports = ProductController;
