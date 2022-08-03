const express = require("express");
const adminRouter = express.Router();
const articleController = require("../controllers/articleController");

adminRouter.get("/", articleController.tableShowArticle);

adminRouter.get("/articulos/crear", articleController.create);
adminRouter.get("/articulos/editar/:id", articleController.edit);

module.exports = adminRouter;
