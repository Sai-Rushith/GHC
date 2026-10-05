const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    productName: String,

    variantName: String,

    quantity: Number,

    unitPrice: Number,

    totalPrice: Number,
  },
  {
    _id: false,
  }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    outlet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet",
      required: true,
    },

    orderType: {
      type: String,
      enum: ["DINE_IN", "TAKEAWAY"],
      required: true,
    },

    items: [orderItemSchema],

    subtotal: Number,

    tax: Number,

    total: Number,

    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED"],
      default: "PENDING",
    },

    orderStatus: {
      type: String,
      enum: [
        "PENDING",
        "ACCEPTED",
        "PREPARING",
        "READY",
        "COMPLETED",
        "CANCELLED",
      ],
      default: "PENDING",
    },

    tableNumber: Number,

    notes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);