const express = require("express");
const router = express.Router();

const db = require("../server/config/db");

router.post ("/",(req,res)=>{
    const docName = req.body.docName;
    const docTitle = req.body.docTitle;
    const docDate = req.body.docDate;
    const docFile = req.body.docFile;
    
    const author = req.body.author;
    db.query(
        "INSERT INTO uploaddocs (docname,doctitle,docdate,docfile,author) VALUES (?, ?, ?, ?,?);",
        [docName,docTitle,docDate,docFile, author],
        (err, results)=>{
            console.log(err);
            res.send(results);
        }
    )
})

router.get("/:author", (req,res)=>{
    db.query("SELECT * FROM uploaddocs ORDER BY  id DESC" , (err, results)=> {
        if (err){
            console.log(err)
        }
        res.send(results)
    });
});


module.exports = router;


    
    
    
  
    
   
  
    
     
      
      
        
     