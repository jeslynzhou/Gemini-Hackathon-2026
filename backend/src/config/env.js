const dotenv = require("dotenv");

dotenv.config();

function toNumber(value, fallback) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function parseCorsOrigin(value) {
  if (!value) {
    return undefined;
  }

  const list = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return list.length ? list : undefined;
}

const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: toNumber(process.env.PORT, 3001),
  BINANCE_BASE_URL: process.env.BINANCE_BASE_URL || "https://api.binance.com",
  RATE_LIMIT_WINDOW_MS: toNumber(process.env.RATE_LIMIT_WINDOW_MS, 60 * 1000),
  RATE_LIMIT_MAX: toNumber(process.env.RATE_LIMIT_MAX, 120),
  CORS_ORIGIN: parseCorsOrigin(process.env.CORS_ORIGIN),
};

module.exports = env;
