const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getOrder,
  updateOrderStatus,
} = require("../controllers/Order");

const { auth, isAdmin } = require("../middlewares/auth");

router.post("/", auth, createOrder);

router.get("/my-orders", auth, getMyOrders);

router.get("/:id", auth, getOrder);

router.put("/:id/status", auth, isAdmin, updateOrderStatus);

module.exports = router;