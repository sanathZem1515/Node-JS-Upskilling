
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const CashKickContract = sequelize.define("cashKickContract", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = CashKickContract;
