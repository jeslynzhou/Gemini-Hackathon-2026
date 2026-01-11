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
 *       - in: query
 *         name: raw
 *         required: false
 *         schema:
 *           type: boolean
 *         example: false
 *     responses:
 *       200:
 *         description: Normalized latest price
 *         content:
 *           application/json:
 *             example:
 *               symbol: BTCUSDT
 *               price: 90829.68
 *               source: binance
 *               timestamp: 1730000000000
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
 *       - in: query
 *         name: raw
 *         required: false
 *         schema:
 *           type: boolean
 *         example: false
 *     responses:
 *       200:
 *         description: Normalized candlestick data
 *         content:
 *           application/json:
 *             example:
 *               symbol: BTCUSDT
 *               interval: 1m
 *               source: binance
 *               timestamp: 1730000000000
 *               data:
 *                 - openTime: 1730000000000
 *                   open: 90800.1
 *                   high: 90900.2
 *                   low: 90750
 *                   close: 90829.68
 *                   volume: 12.34
 *                   closeTime: 1730000059999
 */

/**
 * @swagger
 * /api/market/ticker:
 *   get:
 *     summary: Get 24h ticker data (price + volume) from Binance
 *     parameters:
 *       - in: query
 *         name: symbol
 *         required: true
 *         schema:
 *           type: string
 *         example: BTCUSDT
 *       - in: query
 *         name: raw
 *         required: false
 *         schema:
 *           type: boolean
 *         example: false
 *     responses:
 *       200:
 *         description: Normalized 24h ticker data
 *         content:
 *           application/json:
 *             example:
 *               symbol: BTCUSDT
 *               price: 90829.68
 *               volume: 3164.89867
 *               quoteVolume: 286949575.4532762
 *               source: binance
 *               timestamp: 1730000000000
 */
