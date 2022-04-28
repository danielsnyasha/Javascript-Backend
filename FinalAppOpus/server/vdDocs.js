const express = require("express");
const router = express.Router();

const db = require("./config/db");

router.get("/:username", (req, res) => {
  const docfile = req.params.docfile;
  const docname =req.params.docname

  db.query(
    "SELECT * FROM uploaddocs ORDER BY id DESC LIMIT 10",
    docfile,
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
