import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db= new pg.Client({
  user: 'postgres',
  host: "localhost",
  database: "world",
  password: "1234",
  port: 5432
})
db.connect();
let countries=[];
const result= db.query("select * from visited_countries",(err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    
    res.rows.forEach(element => {
      countries.push(element)
    });
  }
});
console.log(countries);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
