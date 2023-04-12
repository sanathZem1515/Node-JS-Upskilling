const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
};

exports.createUser = (req, res, next) => {
  User.create(req.body).then((result) => {
    res.send(result);
  });
};

exports.deleteUser = (req, res, next) => {
  User.findAll({ where: { id: req.body.id } })
    .then((users) => {
      if (users) {
        users[0].destroy();
        res.send("destroyed");
      }
      res.status(400).send("could not found user with the following id "+ req.body.id);
    })
    .catch((err) => console.log(err));
};

exports.editUser = (req, res, next) => {
  User.findAll({ where: { id: req.body.id } })
    .then((users) => {
      if (users) {
        console.log(users);
        let user = users[0];
        user.name = req.body.name;
        user.email = req.body.email;
        user.phoneNumber = req.body.phoneNumber;
        user.designation = req.body.designation;
        user.companyName = req.body.companyName;
        user.save();
        res.send(user);
      }
      res
        .status(400)
        .send("could not found user with the following id " + req.body.id);

    })
    .catch((err) => console.log(err));
};
