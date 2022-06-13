const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tournament.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      min_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      place_x: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      place_y: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      max_participants: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 2,
        },
      },
      deadline_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      image: {
        type: Sequelize.BLOB,
        allowNull: true,
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
      modelName: 'Tournemant',
      tableName: 'tournaments',
      freezeTableName: true,
    }
  );
  return Tournament;
};
