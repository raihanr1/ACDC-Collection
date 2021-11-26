const router = require("express").Router();
const Controller = require("../controllers/userController");
router.get("/");
router.get("/images", Controller.getAllProducts);

module.exports = router;
