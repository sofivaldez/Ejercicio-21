const express = require("express");
const publicRouter = express.Router();

const { showHome } = require("../controllers/pagesController");
const { show } = require("../controllers/articleController");
// Rutas Públicas:
// ...

publicRouter.get("/home", showHome);
publicRouter.get("/articles/:id", show);

module.exports = publicRouter;
