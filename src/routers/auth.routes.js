const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");


const User = require("../models/user.model");

router.post("/register", registerController);
router.post("/login", loginController);



module.exports = router;
