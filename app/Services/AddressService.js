"use strict";

const Address = use("App/Models/Address");

class AddressService {
  async createAddress(addressData, clientId) {
    const address = await Address.create({
      ...addressData,
      client_id: clientId,
    });
    return address;
  }
}

module.exports = new AddressService();
