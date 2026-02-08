const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const controller = require("../controllers/userController");

router.get("/profile", protect, controller.getProfile);
router.put("/profile", protect, controller.updateProfile);

module.exports = router;
