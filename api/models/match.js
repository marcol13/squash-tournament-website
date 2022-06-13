"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.participationFirstId = this.belongsTo(models.Participation, {
        foreignKey: "participation_first_id",
      });
      this.participationSecondId = this.belongsTo(models.Participation, {
        foreignKey: "participation_second_id",
      });
    }
  }
  Match.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      score_participation_first: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      score_participation_second: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      next_match: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "matches",
          key: "id",
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Match",
      tableName: "matches",
      freezeTableName: true,
    }
  );
  return Match;
};
