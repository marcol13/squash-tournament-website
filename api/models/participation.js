const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.userId = this.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      this.tournamentId = this.belongsTo(models.Tournament, {
        foreignKey: "tournament_id",
      });
    }
  }
  Participant.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      is_organizer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      modelName: "Participation",
      tableName: "participations",
      freezeTableName: true,
    }
  );
  return Participation;
};
