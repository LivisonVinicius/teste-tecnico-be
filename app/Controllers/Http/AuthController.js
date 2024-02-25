"use strict";

const UserService = use("App/Services/UserService");
const JwtService = use("App/Services/JwtService");

class AuthController {
  constructor() {
    this.jwtService = new JwtService("your-secret-key");
  }
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
  async login({ request, response }) {
    const { email, password } = request.all();

    const user = await UserService.verifyCredentials(email, password);
    console.log("oi");
    if (!user) {
      return response.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = this.jwtService.generateToken({ userId: user.id });

    return response.status(200).json({ token });
  }
}

module.exports = AuthController;
