"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Award extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Award.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "type is required",
          },
          notNull: {
            msg: "type is required",
          },
        },
      },
      poin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "poin is required",
          },
          notNull: {
            msg: "poin is required",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "name is required",
          },
          notNull: {
            msg: "name is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Award",
    }
  );
  return Award;
};
