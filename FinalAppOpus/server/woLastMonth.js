const express = require("express");
const router = express.Router();

const db = require("./config/db");



router.get('/:username', (req,res)=>{
    const username = req.params.username;
    const sqlSelect = 
        "SELECT * FROM powerappdata_temp WHERE Status = 'Awaiting Feedback' AND DatePrinted BETWEEN'2021-03-01 00:00:00' AND '2021-03-31 00:00:00' ";
        username,
    db.query(sqlSelect,(err, results)=>{
        res.send(results);
    });

})

module.exports = router;
