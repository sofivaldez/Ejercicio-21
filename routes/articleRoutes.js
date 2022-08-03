const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.post("/", articleController.store); // esta ruta tiene este nombre porque es lo que quiero crear
router.put("/:id", articleController.update);
router.delete("/:id", articleController.destroy);
router.post("/:id", articleController.storeComment);
module.exports = router;
