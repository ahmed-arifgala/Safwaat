const { loginController } = require("../controllers/loginController");

const loginRouter = require("express").Router();

// SIGNUP ROUTE
loginRouter.post("/", loginController);

module.exports = {
  loginRouter,
};
