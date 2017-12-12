var express = require("express");
var router = express.Router();
const products = require("../product-database.js");
const stores = require("../store-database.js");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/products", function(req, res, next) {
  res.render("products"), { products };
  console.log(products);
});

router.get("/stores", function(req, res, next) {
  res.render("stores"), { stores };
  console.log(stores);
  console.log("##########################################");
  console.log("##########################################");
  console.log(stores[0].id_store);
  console.log(stores[0].name);
});

module.exports = router;
