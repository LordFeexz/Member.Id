const { Award } = require("../models/award");

class Controller {
  static async getAllData(req, res, next) {
    try {
      const data = await Award.findAll();

      if (data.length < 1) throw { name: "Data not found" };

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
