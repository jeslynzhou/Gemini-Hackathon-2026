const express = require("express");
const { getPrice, getKlines } = require("../services/binance");

const router = express.Router();

/**
 * @swagger
 * /api/market/price:
 *   get:
 *     summary: Get latest price from Binance
 *     parameters:
 *       - in: query
 *         name: symbol
 *         required: true
 *         schema:
 *           type: string
 *         example: BTCUSDT
 *     responses:
 *       200:
 *         description: Latest price
 */
// GET /api/market/price?symbol=BTCUSDT
router.get("/price", async (req, res, next) => {
  try {
    const symbol = (req.query.symbol || "").toUpperCase();
    if (!symbol) return res.status(400).json({ error: "symbol is required" });

    const data = await getPrice(symbol);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/market/klines:
 *   get:
 *     summary: Get candlestick data (klines) from Binance
 *     parameters:
 *       - in: query
 *         name: symbol
 *         required: true
 *         schema:
 *           type: string
 *         example: BTCUSDT
 *       - in: query
 *         name: interval
 *         required: false
 *         schema:
 *           type: string
 *         example: 1m
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *         example: 5
 *     responses:
 *       200:
 *         description: Array of candles
 */
// GET /api/market/klines?symbol=BTCUSDT&interval=1m&limit=100
router.get("/klines", async (req, res, next) => {
  try {
    const symbol = (req.query.symbol || "").toUpperCase();
    const interval = req.query.interval || "1m";
    const limit = Number(req.query.limit || 100);

    if (!symbol) return res.status(400).json({ error: "symbol is required" });

    const data = await getKlines({ symbol, interval, limit });
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
