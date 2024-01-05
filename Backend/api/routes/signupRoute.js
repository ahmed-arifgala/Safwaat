const { signupController } = require("../controllers/signupController");

const signupRouter = require("express").Router();

// SIGNUP ROUTE
signupRouter.post("/", signupController);

module.exports = {
  signupRouter,
};
