const router = require("express").Router();
const adminRouter = require("./admin");
const userRouter = require("./user");

router.use("/products");
router.use("/users");

module.exports = router;
