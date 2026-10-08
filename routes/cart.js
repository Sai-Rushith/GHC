const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} = require("../controllers/Cart");

const {auth} = require("../middlewares/auth");

router.post("/add", auth, addToCart);
router.get("/", auth, getCart);
router.put("/update", auth, updateCartItem);
router.delete("/remove/:itemId", auth, removeCartItem);
router.delete("/clear", auth, clearCart);

module.exports = router;