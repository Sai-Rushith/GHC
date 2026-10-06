const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product");

const { auth, isAdmin } = require("../middlewares/auth");

router.post("/", auth, isAdmin, createProduct);

router.get("/", getProducts);
router.get("/:id", getProduct);

router.put("/:id", auth, isAdmin, updateProduct);
router.delete("/:id", auth, isAdmin, deleteProduct);

module.exports = router;