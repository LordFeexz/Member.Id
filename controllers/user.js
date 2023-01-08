const { User } = require("../models");

class Controller {
  static async getAllUser(req, res, next) {
    try {
      const user = await User.findAll();

      if (user.length < 1) throw { name: "Data not found" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
