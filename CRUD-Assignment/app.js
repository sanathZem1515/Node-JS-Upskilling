const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const sequelize = require("./util/database");
const User = require("./models/user");
const CashKick = require("./models/cashKick");
const Contract = require("./models/contract");
const CashKickContract = require("./models/cashkick-contract");

const userRoutes = require("./routes/user");
const contractRoutes = require("./routes/contract");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // res.setHeader("Content-Type", "application/json");
  next();
});

app.use("/users", userRoutes);
app.use("/contracts", contractRoutes);

app.use((req, res, next) => {
  res.send("welcome");
});

CashKick.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(CashKick);
CashKick.belongsToMany(Contract, { through: CashKickContract });
Contract.belongsToMany(CashKick, { through: CashKickContract });

sequelize
    // .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Max", email: "test@test.com" });
    }
    return user;
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
