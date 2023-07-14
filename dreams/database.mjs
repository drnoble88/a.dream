import express from "express";
import mysql from "mysql";

const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "mysql"
});

con.connect(function (err) {
  if (err) {
    console.error("Failed to connect to MySQL server:", err);
    return;
  }
  console.log("Connected to MySQL server!");

});

// function createDatabase() {
//   con.query("CREATE DATABASE IF NOT EXISTS dreamdata", function (err, result) {
//     if (err) {
//       console.error("Failed to create database:", err);
//       return;
//     }
//     console.log("Database created!");

//     startServer();
//   });
// }

app.get("/places",(req,res)=>{
  const q="SELECT * FROM Destinations"
  con.query(q, (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.use(express.json());
app.post("/places", (req, res) => {
  // Retrieve the values from the request body or other source
  const name = req.body.name;
  const address = req.body.address;
  const picture = req.body.picture;

  const sanitizedName = escapeSpecialCharacters(name);
  const sanitizedAddress = escapeSpecialCharacters(address);
  const sanitizedPicture = escapeSpecialCharacters(picture);

  // Create the SQL query with named placeholders
  const sql = `INSERT INTO Destinations (name, address, picture) VALUES ('${sanitizedName}', '${sanitizedAddress}', '${sanitizedPicture}')`;

  // Execute the query with named placeholders and values as an object
  con.query(sql, { name, address, picture }, (err, result) => {
    if (err) {
      // Handle the error appropriately
      console.error("Error executing SQL query:", err);
      res.status(500).send("An error occurred");
      return;
    }

    // Query executed successfully
    console.log("New record inserted");
    res.status(200).send("Record inserted");
  });
});

function escapeSpecialCharacters(value) {
  // Manually escape special characters in the value
  return value.replace(/'/g, "''");
}

  app.listen(8800, () => {
    console.log('Server started and connected to the database!');
  });

