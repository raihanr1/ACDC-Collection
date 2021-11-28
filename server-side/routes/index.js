const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const userRouter = require("./user");
router.use("/products", userRouter);
router.use("/users", adminRouter);

module.exports = router;
