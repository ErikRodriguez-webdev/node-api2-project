const express = require("express");

const router = express.Router();

const { insert } = require("../data/db");

router.post("/", (req, res) => {
  console.log("In post", res.body);
  insert(res.body);
});

module.exports = router;
