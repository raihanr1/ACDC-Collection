const express = require("express");
const router = express.Router();
const Controller = require("../controllers/adminController");
const { authentication } = require("../middleware/authentication");
const { authorization } = require("../middleware/authorization");
const { errorHandle } = require("../middleware/errorHandle");

router.post("/login", Controller.adminLogin);
router.post(
  "/register",
  authentication,
  authorization,
  Controller.adminRegister
);

router.post(
  "/categories",
  authentication,
  authorization,
  Controller.createNewCategory
);
router.post(
  "/products/:category_id",
  authentication,
  authorization,
  Controller.createNewProduct
);

router.put(
  "/products/:product_id",
  authentication,
  authorization,
  Controller.updateProduct
);

router.delete(
  "/products/:product_id",
  authentication,
  authorization,
  Controller.deleteProduct
);

router.use(errorHandle);

module.exports = router;
