const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Contract = sequelize.define("contract", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  type: Sequelize.STRING,
  perPayment: Sequelize.INTEGER,
  totalAmount: Sequelize.INTEGER,
  amountUsed: Sequelize.INTEGER,
  term:Sequelize.INTEGER
});

module.exports = Contract;
