const express = require("express");
const adminRouter = express.Router();
const articleController = require("../controllers/articleController");
const authCheck = require("../middlewares/verifyNotAuthenticated");

adminRouter.get("/", authCheck, articleController.tableShowArticle);

adminRouter.get("/articulos/crear", authCheck, articleController.create);
adminRouter.get("/articulos/editar/:id", authCheck, articleController.edit);

module.exports = adminRouter;
