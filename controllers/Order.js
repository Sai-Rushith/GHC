const Order = require("../models/Order");
const Cart = require("../models/Cart");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { outlet, orderType, tableNumber, notes } = req.body;

    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    let subtotal = 0;

    const orderItems = cart.items.map((item) => {
      const totalPrice = item.price * item.quantity;

      subtotal += totalPrice;

      return {
        product: item.product._id,
        productName: item.product.name,
        variantLabel: item.variantLabel,
        quantity: item.quantity,
        unitPrice: item.price,
        totalPrice,
      };
    });

    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + tax;

    const order = await Order.create({
      user: req.user.id,
      outlet,
      orderType,
      tableNumber,
      notes,
      items: orderItems,
      subtotal,
      tax,
      total,
    });

    cart.items = [];
    await cart.save();

    return res.status(201).json({
      success: true,
      data: order,
      message: "Order created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET MY ORDERS
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE ORDER
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE ORDER STATUS (ADMIN)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
      message: "Order status updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};