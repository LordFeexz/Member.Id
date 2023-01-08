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

      if (minPoin && maxPoin) {
        option.where.poin = {
          [Op.between]: [minPoin, maxPoin],
        };
      } else if (minPoin) {
        option.where.poin = {
          [Op.gte]: minPoin,
        };
      } else if (maxPoin) {
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

  static async getDataById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await Award.findOne({ where: { id } });

      if (!data) throw { name: "Data not found" };

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async createData(req, res, next) {
    try {
      const { type, poin, name } = req.body;

      await Award.create({ type, poin, name });

      res.status(201).json({ message: "success create" });
    } catch (err) {
      next(err);
    }
  }

  static async editData(req, res, next) {
    try {
      const { id } = req.params;

      const { type, poin, name } = req.body;

      const data = await Award.update({ type, poin, name }, { where: { id } });

      if (!data) throw { name: "failed update" };

      res.status(201).json({ message: "success update" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteData(req, res, next) {
    try {
      const { id } = req.params;

      const data = await Award.destroy({ where: { id } });

      if (!data) throw { name: "failed update" };

      res.status(200).json({ message: "success delete" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
