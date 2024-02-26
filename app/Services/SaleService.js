"use strict";

const Sale = use("App/Models/Sale");

class SaleService {
  async createSale(clientId, productId, totalPrice) {
    const sale = await Sale.create({
      client_id: clientId,
      product_id: productId,
      total_price: totalPrice,
    });
    return sale;
  }
}

module.exports = SaleService;
