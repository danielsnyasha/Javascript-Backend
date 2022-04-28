const express = require('express');
const router = express.Router();

const cors =  require ('cors');

const db  = require('../config/db');

router.post('/register',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    const email = req.body.email;

    const sqlInsert = "INSERT INTO users(username,password,confirmpassword,email) VALUES (?,?,?,?)";


    db.query(sqlInsert
        ,[username,password,confirmpassword,email],
        (err,results)=>{
        console.log(err);
     res.send(results);   
    }) ;

} );

router.post("/upload",(req,res)=> {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
  
    const sqlUpload =
    "INSERT INTO uploads(title, description, image) VALUES (?,?,?)";
  
    db.query(sqlUpload,
      [title, description, image],
      (err, results)=>{
        console.log(err);
        res.send(results);
      }
    );
    
  });
  
module.exports = router;
