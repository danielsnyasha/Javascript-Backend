const express = require("express");
const router = express.Router();

const db = require("../server/config/db");

router.post ("/",(req,res)=>{
    const comment = req.body.comment;
    const usercomment = req.body.usercomment;
   
    db.query(
        "INSERT INTO comments (comment,usercomment) VALUES (?, ?);",
        [comment, usercomment],
        (err, results)=>{
            console.log(err);
            res.send(results);
        }
    )
})

router.get("/", (req,res)=>{
    db.query("SELECT * FROM comments", (err, results)=> {
        if (err){
            console.log(err)
        }
        res.send(results)
    });
});


module.exports = router;


    
    
    
  
    
   
  
    
     
      
      
        
     