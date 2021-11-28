const express = require("express");
const router = express.Router();
const { Image, Category, Product } = require("../models");
const adminRouter = require("./admin");
const userRouter = require("./user");
router.use("/products", userRouter);
router.use("/users", adminRouter);

router.get("/lala", async (req, res) => {
  let response = await Product.findAll();
  res.send(response);
});
module.exports = router;
