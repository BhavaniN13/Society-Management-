let mysql = require("mysql2");
// MySQL connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bhavani@13",
  database: "societymanagement",
});

// Connect to MySQL
try {
  connection.connect();
  console.log("connected with mysql");
} catch (err) {
  console.log(err);
} finally {
  // Close MySQL connection when done
  connection.end();
}
