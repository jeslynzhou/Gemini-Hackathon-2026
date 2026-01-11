const express = require("express");
const router = express.Router();
const marketController = require("../controllers/marketController");

router.get("/price", marketController.getMarketPrice);
router.get("/klines", marketController.getMarketKlines);
router.get("/ticker", marketController.getMarketTicker);

module.exports = router;
