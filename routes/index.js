var express = require("express");
var router = express.Router();
const products = require("../product-database.js");
const stores = require("../store-database.js");
const categories = require("../categories-database.js");
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
  console.log(stores[0].id_store);
  console.log(stores[0].name);
});

router.get("/categories", function(req, res, next) {
  res.render("categories"), { categories };
  console.log(stores);
  console.log(stores[0]);
  console.log(stores[0]);
});

module.exports = router;
