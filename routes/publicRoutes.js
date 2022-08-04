const express = require("express");
const publicRouter = express.Router();
const passport = require("passport");
const authenticate = require("../middlewares/authenticate");
const verifyAuth = require("../middlewares/verifyAuthenticated");
const { showHome } = require("../controllers/pagesController");
const { show } = require("../controllers/articleController");
const { create } = require("../controllers/articleController");
const { showLogin, showRegister, createNewUser, logOut } = require("../controllers/userController");

publicRouter.get("/", showHome);
publicRouter.get("/articles/:id", show);
publicRouter.get("/login", verifyAuth, showLogin);
publicRouter.post("/login", authenticate);
publicRouter.get("/register", verifyAuth, showRegister);
publicRouter.post("/register", createNewUser);
publicRouter.delete("/", logOut);

module.exports = publicRouter;
