const jwt = require("jsonwebtoken");

class JwtService {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  generateToken(payload) {
    return jwt.sign(payload, this.secretKey);
  }

  verifyToken(token) {
    return jwt.verify(token, this.secretKey);
  }
}

module.exports = JwtService;
