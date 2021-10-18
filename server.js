const fs = require("fs");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json()); //json 형태로 parsing
app.use(express.urlencoded({ extended: false }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");
const e = require("express");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

app.get("/api/custommer", (req, res) => {
  connection.query("select * from customer", (err, rows, fields) => {
    console.log("api user info data check: ");
    rows.map((e) => console.log(`name:  ${e.name}`));
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
