const path = require("path");

const express = require("express");

const contractController = require("../controllers/contract");

const router = express.Router();

router.get("/", contractController.getAllContracts);
router.post("/", contractController.postContract);
router.put("/", contractController.editContract);
router.delete("/", contractController.deleteContract);

module.exports = router;
