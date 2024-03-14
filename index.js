let express = require("express");
let mongoose = require("mongoose");
//let axios = require("axios");
let mysql = require("mysql2");

const app = express();
require("./db/connection");

app.use(express.json());

let user = require("./model/model");

require("./route/route")(app);

let port = 4321;

app.get("/", (req, res) => {
  res.send("WELCOME TO SOCIETY MANAGEMENT SYSTEM ");
});

app.listen(port, (req, res) => {
  if (!req) {
    console.log(`server connected with port ${port}`);
  } else {
    console.log("error");
  }
});

// // Fetch data from API
// axios
//   .get("https://signup")
//   .then((response) => {
//     const data = response.data; // Assuming API response is an array of objects

//     // Insert data into MySQL table
//     data.forEach((item) => {
//       const {
//         userId,
//         Firstname,
//         Lastname,
//         Emailid,
//         Password,
//         Address,
//         Phonenumber,
//         RoleId,
//       } = item;
//       const sql =
//         "INSERT INTO user (userId,Firstname,Lastname,Emailid,Password,Address,Phonenumber,RoleId,) VALUES (?,?,?,?,?,?,?,?)";
//       const values = [
//         userId,
//         Firstname,
//         Lastname,
//         Emailid,
//         Password,
//         Address,
//         Phonenumber,
//         RoleId,
//       ];

//       connection.query(sql, values, (error, results, fields) => {
//         if (error) {
//           console.error("Error inserting data into MySQL:", error);
//         } else {
//           console.log("Data inserted successfully:", results);
//         }
//       });
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data from API:", error);
//   })
//   .finally(() => {
//     // Close MySQL connection when done
//     connection.end();
//   });
