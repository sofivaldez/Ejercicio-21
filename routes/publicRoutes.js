const express = require("express");
const publicRouter = express.Router();

const { showHome } = require("../controllers/pagesController");
const { show } = require("../controllers/articleController");
const { create } = require("../controllers/articleController");

publicRouter.get("/", showHome);
publicRouter.get("/articulos/:id", show);

module.exports = publicRouter;
