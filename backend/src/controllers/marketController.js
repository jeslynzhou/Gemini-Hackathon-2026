const { getPrice, getKlines, getTicker24h } = require("../services/binance");

exports.getMarketPrice = async (req, res, next) => {
  try {
    const symbol = (req.query.symbol || "").toUpperCase();
    if (!symbol) return res.status(400).json({ error: "symbol is required" });

    const data = await getPrice(symbol);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getMarketKlines = async (req, res, next) => {
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
};

exports.getMarketTicker = async (req, res, next) => {
  try {
    const symbol = (req.query.symbol || "").toUpperCase();
    if (!symbol) return res.status(400).json({ error: "symbol is required" });

    const data = await getTicker24h(symbol);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
