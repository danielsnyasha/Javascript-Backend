const express = require("express");
const router = express.Router();

const db = require('./config/db')

router.post('/', (req,res)=>{

    const userliking = req.body.userliking;
    const postsid = req.body.postsid;
    db.query(
        "INSERT INTO likes (userliking, postsid) VALUES (?, ?)",
    [userliking,postsid], 
    (err, results)=>{
        db.query ("UPDATE uploads SET likes = likes+1 WHERE id =?", postsid,(err2, results2)=>{
            res.send(results);
        })
        
    })

})





module.exports = router;