const path = require("path");

const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.delete("/", userController.deleteUser);
router.put("/", userController.editUser);

module.exports = router;
