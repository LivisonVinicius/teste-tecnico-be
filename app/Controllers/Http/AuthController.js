"use strict";

const UserService = use("App/Services/UserService");

class AuthController {
  async signup({ request, response }) {
    const { username, email, password } = request.only([
      "username",
      "email",
      "password",
    ]);

    try {
      const user = await UserService.createUser({ username, email, password });
      return response
        .status(201)
        .json({ message: "Usuário criado com sucesso.", user });
    } catch (error) {
      if (error.status === 409) {
        return response.status(409).json({
          message: "E-mail já cadastrado. Por favor, escolha outro e-mail.",
        });
      }
      return response.status(500).json({ message: "Erro ao criar usuário." });
    }
  }
}

module.exports = AuthController;
