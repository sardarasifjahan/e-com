const express = require("express");
const { userMiddleware, requireSignin } = require("../common-middleware");
const router = express.Router();
const { addItemToCart } = require("../controller/cart");

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);

module.exports = router;
