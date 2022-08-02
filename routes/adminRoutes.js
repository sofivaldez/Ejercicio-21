const express = require("express");
const adminRouter = express.Router();
const articleController = require("../controllers/articleController");

adminRouter.get("/", articleController.tableShowArticle);

adminRouter.get("/eliminar/:id", articleController.destroy);

module.exports = adminRouter;
