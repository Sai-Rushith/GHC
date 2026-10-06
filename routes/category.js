const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/Category");

const { auth, isAdmin } = require("../middlewares/auth");

router.post("/", auth, isAdmin, createCategory);

router.get("/", getCategories);
router.get("/:id", getCategory);

router.put("/:id", auth, isAdmin, updateCategory);
router.delete("/:id", auth, isAdmin, deleteCategory);

module.exports = router;