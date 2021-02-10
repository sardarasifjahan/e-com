const Product = require("../models/product");
const shortid = require("shortid");
const { default: slugify } = require("slugify");
exports.createProduct = (req, res) => {
  console.log("reqbody", req.body);
  console.log("reqbody", req.body.files);
  const { name, price, description, category, quantity, createdBy } = req.body;
  console.log("created By", createdBy);
  console.log("Request user id", req.user._id);

  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });

  product.save((error, product) => {
    console.log(product);
    console.log(error);
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};
