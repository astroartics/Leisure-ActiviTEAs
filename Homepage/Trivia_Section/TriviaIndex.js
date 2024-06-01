import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

const app = express();
const port = 3000;

db.connect();

let quiz = [];
db.query("SELECT * FROM funfacts", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

//app.use(express.static(path.join(__dirname,'/public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//app.get('/style.css',(req,res) => {
    //  res.sendFile(path.join(__dirname,'public','style.css'));
//});

// GET home page
app.get("/food_funfacts", async (req, res) => {
    await nextFact();
    console.log(currentFact);
    res.render("index.ejs", { question: currentFact });
  });

let currentFact = {};

async function nextFact() {
    const randomFact = quiz[Math.floor(Math.random() * quiz.length)];
    currentFact = randomFact;
  }

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
