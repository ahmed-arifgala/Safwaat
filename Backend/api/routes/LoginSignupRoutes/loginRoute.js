const {
  googleLoginController,
} = require("../../controllers/LoginSgnupControllers/googleLoginController");
const {
  loginController,
} = require("../../controllers/LoginSgnupControllers/loginController");

const loginRouter = require("express").Router();

// SIGNUP ROUTE
loginRouter.post("/", loginController);
loginRouter.post("/google", googleLoginController);

module.exports = {
  loginRouter,
};
