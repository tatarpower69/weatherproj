const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const controller = require("../controllers/cityController");

router.use(protect);

router.post("/", controller.createCity);
router.get("/", controller.getCities);
router.get("/:id", controller.getCity);
router.put("/:id", controller.updateCity);
router.delete("/:id", controller.deleteCity);

router.get("/weather/:city", controller.getWeather);

module.exports = router;
