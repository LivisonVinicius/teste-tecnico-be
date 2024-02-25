"use strict";

const User = use("App/Models/User");

class UserService {
  async createUser(userData) {
    const { username, email, password } = userData;

    try {
      const existingUser = await User.findBy("email", email);
      if (existingUser) {
        const error = new Error(
          "E-mail já cadastrado. Por favor, escolha outro e-mail."
        );
        error.status = 409;
        throw error;
      }

      const user = await User.create({ username, email, password });
      return user;
    } catch (error) {
      if (error.status === 409) throw error;
      throw new Error("Erro ao criar usuário.");
    }
  }
}

module.exports = new UserService();
