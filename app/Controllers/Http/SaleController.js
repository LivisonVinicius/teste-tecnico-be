// app/Controllers/Http/SaleController.js

"use strict";

const SaleService = use("App/Services/SaleService");

class SaleController {
  async store({ request, response }) {
    try {
      const { client_id, product_id, total_price } = request.only([
        "client_id",
        "product_id",
        "total_price",
      ]);

      const saleService = new SaleService();
      const sale = await saleService.createSale(
        client_id,
        product_id,
        total_price
      );

      return response.status(201).json({
        message: "Venda registrada com sucesso.",
        sale,
      });
    } catch (error) {
      return response.status(500).json({
        message: "Erro ao registrar a venda.",
        error: error.message,
      });
    }
  }
}

module.exports = SaleController;
