const express = require("express");
const router = express.Router();

const db = require("./config/db");

router.get("/", (req,res)=>{
  db.query("SELECT * FROM chat ORDER BY  id DESC" , (err, results)=> {
      if (err){
          console.log(err)
      }
      res.send(results)
  });
});


module.exports = router;

router.post("/", (req, res) => {
  const messageName = req.body.messageName;
  const messageTitle = req.body.messageTitle;
  const username = req.body.username;
  

  db.query(
    "INSERT INTO chat(messageName,messageTitle,username) VALUES (?, ?, ?);",
    [
      messageName,
      messageTitle,
      username,
      
    ],
    (err, results) => {
      console.log(err);
      // res.json({ message: "Message Sent!" });
      res.send(results);
      console.log(results)
    }
  );
});

module.exports = router;
