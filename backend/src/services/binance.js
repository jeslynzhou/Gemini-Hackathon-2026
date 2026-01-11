const axios = require("axios");
const env = require("../config/env");

const BASE_URL = env.BINANCE_BASE_URL;

async function getPrice(symbol) {
  const url = `${BASE_URL}/api/v3/ticker/price`;
  const res = await axios.get(url, { params: { symbol } });
  return res.data;
}

async function getKlines({ symbol, interval, limit }) {
  const url = `${BASE_URL}/api/v3/klines`;
  const res = await axios.get(url, { params: { symbol, interval, limit } });

  return res.data.map((k) => ({
    openTime: k[0],
    open: k[1],
    high: k[2],
    low: k[3],
    close: k[4],
    volume: k[5],
    closeTime: k[6],
  }));
}

module.exports = { getPrice, getKlines };
