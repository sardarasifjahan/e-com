const express = require("express");
const { adminMiddleware, requireSignin } = require("../common-middleware");
const { createProduct } = require("../controller/product");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);
router.get("/product/get", (req, res) => {
  return res.status(200).json({ msg: "This is the products you got" });
});

module.exports = router;
