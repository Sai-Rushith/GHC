const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  getMe,
} = require("../controllers/Auth");

const { auth } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

 router.get("/me", auth, getMe);

module.exports = router;