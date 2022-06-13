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
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      score_participation_first: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      score_participation_second: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      next_match: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "matches",
          key: "id",
        },
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
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
