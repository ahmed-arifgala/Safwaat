const flashCardSetRouter = require("express").Router();
const {
  fCSPostController,
  fCSGetController,
  getSingleFlashCardSet,
} = require("../../controllers/FCSetController/flashCardSetController");

flashCardSetRouter.post("/SetCreation", fCSPostController);
flashCardSetRouter.get("/", fCSGetController);
flashCardSetRouter.get("/:id", getSingleFlashCardSet);

module.exports = {
  flashCardSetRouter,
};
