const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "192.168.0.2",
  port: "1212",
  user: "DevUser",
  password:"lcv.120197",
  // password: "lcv.120197",
  database: "lcvsscopus_data",

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const email = req.body.email;
  const confirmpasswords = (password!= confirmpassword);

  const sqlInsert =
    "INSERT INTO users(username,password,confirmpassword,email) VALUES (?,?,?,?)";

  db.query(sqlInsert,[username, password, confirmpassword, email],(err, results) => {
    if (err){
      res.json({message: "Please Enter Valid Details"});
      
    }
    if (confirmpasswords){
      res.json({message: "Passwords Do Not Match"})
      
    }
    else{
      res.send(results)
      console.log(results)
    } 
     
      
    }
  );
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlInsert = "SELECT * FROM users WHERE username=? ";

  db.query(sqlInsert, username, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (results.length > 0) {
      if (password == results[0].password) {
        res.json({ loggedIn: true, username: username });
      } 
      else {
        res.json({ loggedIn: false, message: "Wrong username/password" });

      }
    } else {

      res.json({ loggedIn: false, message: "User does not exist" });


    }
  });
});


const uploadRoute = require('./Upload.js');
app.use("/upload", uploadRoute);

const likeRoute = require('./Like.js');
app.use("/like", likeRoute);

const profileRoute = require('./Profile.js');
app.use("/profile", profileRoute)

const commentsRoute = require('./Comments.js');
app.use("/comments", commentsRoute)

const profilePicRoute = require('./Profilepic');
app.use("/profilepic", profilePicRoute)

const profileGetRoute = require('./ProfileGet.js');
app.use("/profileget", profileGetRoute)

const employeeFormRoute = require('./employeeForm.js');
app.use("/employeeform", employeeFormRoute)

const allDaysRoute = require('./Alldays');
app.use("/alldays", allDaysRoute)

const tendaysRoute = require('./tendays');
app.use("/tendays", tendaysRoute)

const lastmonthRoute = require('./Lastmonth');
app.use("/lastmonth", lastmonthRoute)


const priorityRoute = require('./Priority');
app.use("/priority", priorityRoute)

const searchRoute = require('./Search');
app.use("/search", searchRoute)

const uploaddocsRoute = require('./UploadDocs');
app.use("/uploaddocs", uploaddocsRoute)

const vdDocsRoute = require('./vdDocs')
app.use("/vdget",vdDocsRoute)

const employeeformRoute = require('./YourDetails')
app.use("/yourdetails",employeeformRoute)

const chatRoute = require('./Chat')
app.use("/chat",chatRoute)

const WOtendayRoute = require('./wo10days')
app.use("/wotendays",WOtendayRoute)

const WOlastmonthRoute = require('./woLastMonth')
app.use("/wolastmonth", WOlastmonthRoute)

const WOallDaysRoute = require('./woalldays')
app.use("/woalldays", WOallDaysRoute)

const WOsearchRoute = require('./wosearch')
app.use("wosearch",WOsearchRoute)

app.listen(3008, (req, res) => {
  console.log("Server running...3008");
});

