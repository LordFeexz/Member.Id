const { compare } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) throw { name: "invalid credentials" };

      const validate = compare(password, user.password);

      if (!validate) throw { name: "invalid credentials" };

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      const access_token = createToken(payload);

      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
