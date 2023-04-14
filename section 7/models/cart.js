
class Cart {
  constructor(userId,productId) {
    this.id = id;
  }
}
const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

});

module.exports = Cart;
