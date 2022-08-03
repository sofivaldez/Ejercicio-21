const express = require("express");
const publicRouter = express.Router();
const passport = require("passport");

const initializePassport = require("../controllers/passportConfig")

const { showHome } = require("../controllers/pagesController");
const { show } = require("../controllers/articleController");
const { create } = require("../controllers/articleController");

publicRouter.get("/", showHome);
publicRouter.get("/articles/:id", show);

module.exports = publicRouter;
