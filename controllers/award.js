const { Op } = require("sequelize");
const { Award } = require("../models");

class Controller {
  static async getAllData(req, res, next) {
    try {
      const { type, name, minPoin, maxPoin, pagination } = req.query;

      let option = { where: {} };

      option.limit = 6;
      if (pagination) {
        option.offset = 6 * pagination - 6;
      } else {
        option.offset = 6 * 1 - 6;
      }

      if (type) {
        option.where.type = {
          [Op.iLike]: `%${type}%`,
        };
      }

      if (name) {
        option.where.name = {
          [Op.iLike]: `%${name}%`,
        };
      }

      if (minPoin) {
        option.where.poin = {
          [Op.gte]: minPoin,
        };
      }

      if (maxPoin) {
        option.where.poin = {
          [Op.lte]: maxPoin,
        };
      }

      const data = await Award.findAll(option);

      if (data.length < 1) throw { name: "Data not found" };

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
