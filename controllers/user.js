const { compare } = require("../helpers/bcrypt");
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

  static async changePassword(req, res, next) {
    try {
      const { id } = req.user;

      const { password, currentPassword } = req.body;

      const user = await User.findOne({ where: { id } });

      const validate = compare(currentPassword, user.password);

      if (!validate) throw { name: "invalid password" };

      await User.update({ password }, { where: { id } });

      res.status(201).json({ message: "success change password" });
    } catch (err) {
      next(err);
    }
  }

  static async editData(req, res, next) {
    try {
      const { id } = req.user;

      const { username, email } = req.body;

      const user = await User.update({ username, email }, { where: { id } });

      if (!user) throw { name: "failed update" };

      res.status(201).json({ message: "success update" });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.user;

      await User.destroy({ where: { id } });

      res.status(200).json({ message: "success delete" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
