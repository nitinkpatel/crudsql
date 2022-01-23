const express = require("express");
const app =  express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'customerlist',
});

app.post("/create", (req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const number = req.body.number;
    const alter = req/body.alter;

    db.query(
        "INSERT INTO customers (name, number, alter) VALUES (?,?,?)",
        [name, number, alter], 
        (err, result) => {
            if (err) {
                    console.log (err)
            } else {
                res.send("Values Inserted")
            }    
        }
    );
});
app.listen(3001, ()=>{
    console.log("server running");
});