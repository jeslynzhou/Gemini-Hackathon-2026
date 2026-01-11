const axios = require("axios");
const env = require("../config/env");

const BASE_URL = env.BINANCE_BASE_URL;

function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

async function getPrice(symbol) {
  const url = `${BASE_URL}/api/v3/ticker/price`;
  const res = await axios.get(url, { params: { symbol } });
  const data = res.data;

  return {
    raw: data,
    normalized: {
      symbol: data.symbol,
      price: toNumber(data.price),
      source: "binance",
      timestamp: Date.now(),
    },
  };
}

async function getKlines({ symbol, interval, limit }) {
  const url = `${BASE_URL}/api/v3/klines`;
  const res = await axios.get(url, { params: { symbol, interval, limit } });

  return {
    raw: res.data,
    normalized: {
      symbol,
      interval,
      source: "binance",
      timestamp: Date.now(),
      data: res.data.map((k) => ({
        openTime: toNumber(k[0]),
        open: toNumber(k[1]),
        high: toNumber(k[2]),
        low: toNumber(k[3]),
        close: toNumber(k[4]),
        volume: toNumber(k[5]),
        closeTime: toNumber(k[6]),
      })),
    },
  };
}

async function getTicker24h(symbol) {
  const url = `${BASE_URL}/api/v3/ticker/24hr`;
  const res = await axios.get(url, { params: { symbol } });
  const data = res.data;

  return {
    raw: data,
    normalized: {
      symbol: data.symbol,
      price: toNumber(data.lastPrice),
      volume: toNumber(data.volume),
      quoteVolume: toNumber(data.quoteVolume),
      source: "binance",
      timestamp: Date.now(),
    },
  };
}

module.exports = { getPrice, getKlines, getTicker24h };
