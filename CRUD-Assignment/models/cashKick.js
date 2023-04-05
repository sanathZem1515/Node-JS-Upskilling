const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const CashKick = sequelize.define("cashKick", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  maturityDate: Sequelize.DATE,
  amountRecieved: Sequelize.INTEGER,
  totalFinanced: Sequelize.INTEGER,
  pendingAmount: Sequelize.INTEGER,
});

module.exports = CashKick;
