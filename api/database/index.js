const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = sequelize;

const db = new Sequelize({
  dialect: 'postgres',
  database: 'squash_tournaments_postgres_database',
  username: 'postgres',
  password: null,
  host: 'localhost',
  define: {
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = db;