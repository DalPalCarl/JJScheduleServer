const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5000

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER1,
    password: process.env.DB_PW,
    database: process.env.DB_DB
})

app.use(express.json());

app.listen(
    port,
    () => console.log(`Server is live on http://localhost:${port}`)
);

app.get('/users', (req, res) => {
    res.status(200).send({
        id: 665,
        fname: 'Dallas',
        lname: 'Carlson',
    });
})