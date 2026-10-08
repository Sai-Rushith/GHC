const express = require("express");
const router = express.Router();

const {
  createOutlet,
  getOutlets,
  getOutlet,
  updateOutlet,
  deleteOutlet,
} = require("../controllers/Outlet");

const { auth, isAdmin } = require("../middlewares/auth");

router.post("/", auth, isAdmin, createOutlet);

router.get("/", getOutlets);
router.get("/:id", getOutlet);

router.put("/:id", auth, isAdmin, updateOutlet);
router.delete("/:id", auth, isAdmin, deleteOutlet);

module.exports = router;