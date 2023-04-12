const Contract = require("../models/contract");

exports.postContract = (req, res, next) => {
  console.log("contract creating ...");
  console.log(req.body);
  Contract.create(req.body)
    .then((result) => {
      console.log("Contract Created ", result);
      res.send(result);
    })
    .catch((err) => console.log(err));
};

exports.getAllContracts = (req, res, next) => {
  Contract.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

exports.editContract = (req, res, next) => {
  Contract.findAll({ where: { id: req.body.id } })
    .then((contracts) => {
      let contract = contracts[0];
      if(!contract) {
        res
          .status(400)
          .send("Contract not found with the following id " + req.body.id);

      }
      contract.name = req.body.name;
      contract.status = req.body.status;
      contract.type = req.body.type;
      contract.perPayment = req.body.perPayment;
      contract.totalAmount = req.body.totalAmount;
      contract.amountUsed = req.body.amountUsed;
      contract.term = req.body.term;

      contract.save();
      res.send(contract);
    })
    .catch((err) => console.log(err));
};

exports.deleteContract = (req, res, next) => {
  Contract.findAll({ where: { id: req.body.id } })
    .then((contracts) => {
      if (contracts[0]) {
        contracts[0].destroy();
      } 
        res.status(400).send("Contract not found with the following id "+ req.body.id);
    })
    .catch((err) => console.log(err));
};
