const express = require("express");
const router = express.Router();

const db = require("./config/db");

router.get("/:username", (req, res) => {
  const username = req.params.username;

  db.query(
    "SELECT * FROM profilepic WHERE owner = ? ORDER BY id DESC LIMIT 1",
    username,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
      res.send(results);
    }
  );
});

module.exports = router;

