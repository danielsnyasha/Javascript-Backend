const express = require("express");
const router = express.Router();

const db = require("./config/db");

// router.get("/:username", (req, res) => {
//   const username = req.params.username;

router.get('/:username', (req,res)=>{
    const username = req.params.username;
    const sqlSelect = 
        "SELECT * FROM powerappdata_temp WHERE Status='Awaiting Feedback' ";
        username,
    db.query(sqlSelect,(err, results)=>{
        res.send(results);
    });

})



module.exports = router;
