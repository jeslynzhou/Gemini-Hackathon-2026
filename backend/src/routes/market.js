const express = require("express");
const router = express.Router();
const marketController = require("../controllers/marketController");

router.get("/price", marketController.getMarketPrice);
router.get("/klines", marketController.getMarketKlines);

module.exports = router;