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
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      min_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      place_x: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place_y: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      max_participants: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 2,
        },
      },
      deadline_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      image: {
        type: DataTypes.BLOB,
        allowNull: true,
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
      modelName: "Tournament",
      tableName: "tournaments",
      freezeTableName: true,
    }
  );
  return Tournament;
};
