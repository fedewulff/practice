const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);
usersRouter.get("/new", usersController.createUsernameGet);
usersRouter.post("/new", usersController.createUsernamePost);
usersRouter.delete("/delete", usersController.deleteUsernames);

module.exports = usersRouter;
