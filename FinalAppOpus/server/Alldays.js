const express = require("express");
const router = express.Router();

const db = require("./config/db");

// router.get("/:username", (req, res) => {
//   const username = req.params.username;

router.get('/:username', (req,res)=>{
    const username = req.params.username;
    const sqlSelect = 
        "SELECT QuoteID,DeliveryTime,OrderDate,Name,CustomerID,Status,OrderNo,CompanyName FROM powerappdata_temp WHERE Status='Order Received' AND OrderDate>='2021-02-01 00:00:00' ";
        username,
    db.query(sqlSelect,(err, results)=>{
        res.send(results);
    });

})



module.exports = router;
