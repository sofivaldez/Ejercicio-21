const express = require("express");
const adminRouter = express.Router();
const articleController = require("../controllers/articleController");

adminRouter.get("/", articleController.tableShowArticle);

adminRouter.get("/eliminar/:id", articleController.destroy);
adminRouter.post("/admin/crear", articleController.create);

module.exports = adminRouter;
