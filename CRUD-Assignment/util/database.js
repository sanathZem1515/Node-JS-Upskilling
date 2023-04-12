const Sequelize = require('sequelize');

const sequelize = new Sequelize('Seedar', 'springstudent', 'springstudent', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
