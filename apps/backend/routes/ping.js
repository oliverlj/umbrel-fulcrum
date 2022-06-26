const express = require("express");
const pjson = require("../package.json");
const router = express.Router();

router.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ version: "umbrel-middleware-" + pjson.version });
});

module.exports = router;
