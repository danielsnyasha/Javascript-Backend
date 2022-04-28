const express = require("express");
const router = express.Router();

const db = require("./config/db");

router.post("/", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const from = req.body.from;
  const to = req.body.to,
  const reason = req.body.reason,
  const department = req.body.department,
  const specifyreasons = req.body.specifyreasons,
  const username = req.body.username;

  db.query(
    "INSERT INTO leaveapplication(name,surname,from,to,reason,department,specifyreasons,username) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [
      name,
      surname,
      from,
      to,
      reason,
      department,
      specifyreasons,
      username
      
    ],
    (err, results) => {
      console.log(err);
      res.send(results);
      console.log(results)
    }
  );
});

module.exports = router;
