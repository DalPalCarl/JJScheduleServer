const express = require('express');
require('dotenv').config();
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DB,
});

//const connection = mysql.createConnection("mysql://pv0ke9fwfwx4rzo8:mv1qk7wyu0oawbmj@fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/h1glkf0oavsl2omm");

connection.connect((err) => {
    if(err) {
        console.error("Error connecting to MySQL" + err.stack);
        return;
    }
    console.log("Connected to database");
});

app.use(express.json());

//------------USERS--------------------------------------

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM Users', (err, results) => {
        if(err){
            res.status(500).send("Error fetching users");
            return;
        }
        res.send(results);
    })
});

//------------SHIFTS-------------------------------------

app.get('/shifts', (req, res) => {
    connection.query('SELECT * FROM Shifts', (err, results) => {
        if(err){
            res.status(500).send("Error fetching shifts");
            return;
        }
        res.send(results);
    })
});

app.listen(
    port,
    () => console.log(`Server is live on http://localhost:${port}`)
);