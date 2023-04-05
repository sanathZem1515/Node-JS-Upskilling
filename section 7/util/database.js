const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'springstudent', 'springstudent', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
