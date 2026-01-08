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