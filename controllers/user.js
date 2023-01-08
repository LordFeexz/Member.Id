const { User } = require("../models");

class Controller {
  static async getAllUser(req, res, next) {
    try {
      const users = await User.findAll();

      if (users.length < 1) throw { name: "Data not found" };

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;

      const user = await User.findOne({ where: { id } });

      if (!user) throw { name: "Data not found" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
