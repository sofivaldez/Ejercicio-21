const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const authCheck = require("../middlewares/verifyNotAuthenticated");

router.post("/", authCheck, articleController.store); // esta ruta tiene este nombre porque es lo que quiero crear
router.put("/:id", authCheck, articleController.update);
router.delete("/:id", authCheck, articleController.destroy);
router.post("/:id", authCheck, articleController.storeComment);
module.exports = router;
