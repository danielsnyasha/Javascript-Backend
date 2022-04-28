const express = require("express");
const router = express.Router();

const db = require("./config/db");

router.get("/", (req, res) => {
  

  db.query(
    "SELECT * FROM powerappdata_temp WHERE CompanyName LIKE( '%?%')  ORDER BY id DESC LIMIT 3",
    CompanyName,
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
