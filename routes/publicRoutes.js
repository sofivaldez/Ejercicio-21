const express = require("express");
const publicRouter = express.Router();

const { showHome } = require("../controllers/pagesController");
// Rutas Públicas:
// ...

publicRouter.get("/home", showHome);

module.exports = publicRouter;
