const express = require("express");
const router = express.Router();

const db = require("../server/config/db");

router.post ("/",(req,res)=>{
    const title = req.body.title;
    
    const picture = req.body.picture;
    const owner = req.body.owner;
    db.query(
        "INSERT INTO profilepic (title,picture,owner) VALUES (?, ?, ?);",
        [title,picture, owner],
        (err, results)=>{
            console.log(err);
            res.send(results);
        }
    )
})




module.exports = router;