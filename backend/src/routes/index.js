const express = require("express");
const market = require("./market");

const router = express.Router();

router.use("/market", market);

module.exports = router;
