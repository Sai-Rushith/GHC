const express = require("express");
const router = express.Router();

const { dashboard } = require("../controllers/Admin");

const { auth, isAdmin } = require("../middlewares/auth");

router.get("/dashboard", auth, isAdmin, dashboard);

module.exports = router;