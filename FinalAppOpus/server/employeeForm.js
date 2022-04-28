const express = require("express");
const router = express.Router();

const db = require("./config/db");

router.post("/", (req, res) => {
  const name = req.body.name;
  const middlename = req.body.middlename;
  const surname = req.body.surname;
  const dob = req.body.dob;
  const idNumber = req.body.idNumber;
  const startedWork = req.body.startedWork;
  const phoneNumber = req.body.phoneNumber;
  const address = req.body.address;
  const nationality = req.body.nationality;
  const email = req.body.email;
  const emergencyContactName = req.body.emergencyContactName;
  const relationship = req.body.relationship;
  const emergencyContact = req.body.emergencyContact;
  const positionTitle = req.body.positionTitle;
  const medicalAidName = req.body.medicalAidName;
  const numberOfDependants = req.body.numberOfDependants;
  const sex = req.body.sex;
  const relationshipStatus = req.body.relationshipStatus;
  const username = req.body.username;

  db.query(
    "INSERT INTO employeeform(name,middlename,surname,dob,idNumber,startedWork,address,phoneNumber,nationality,email,emergencyContactName,relationship,emergencyContact,positionTitle,medicalAidName,numberOfDependants,sex,relationshipStatus,username) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    [
      name,
      middlename,
      surname,
      dob,
      idNumber,
      startedWork,
      address,
      phoneNumber,
      nationality,
      email,
      emergencyContactName,
      relationship,
      emergencyContact,
      positionTitle,
      medicalAidName,
      numberOfDependants,
      sex,
      relationshipStatus,
      username,
    ],
    (err, results) => {
      console.log(err);
      res.send(results);
      console.log(results)
    }
  );
});

module.exports = router;
