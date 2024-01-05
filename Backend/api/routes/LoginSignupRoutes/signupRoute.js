const {
  signupController,
} = require("../../controllers/LoginSgnupControllers/signupController");

const signupRouter = require("express").Router();

// SIGNUP ROUTE
signupRouter.post("/", signupController);

module.exports = {
  signupRouter,
};
