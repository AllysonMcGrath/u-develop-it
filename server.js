const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Redmountainumbra@8',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// db.query(`SELECT * FROM candidates WHERE id =1`, (err, row) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//create candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?, ?, ?, ?)`;
// const params = [1, 'Ronald', 'FIrbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
})


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});