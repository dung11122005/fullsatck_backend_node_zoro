require('dotenv').config()
const express = require('express');//commonjs
const path = require('path');//commonjs
const configviewengine = require('./config/viewengine');
const webrouter = require('./routes/web');
const connection = require('./config/database')
// console.log('>>> check env', process.env);


const app = express()// app express
const port = process.env.PORT || 8888; // port(8080) => hardcode . uat . pord
const hostname = process.env.HOST_NAME;// hostname(localhost)

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine ----&&---- config static files
configviewengine(app);


// khai bao route
app.use('/', webrouter);

//test connection

// A simple SELECT query
// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {
//         console.log('>>>> results=', results); // results contains rows returned by server
//         // console.log('>>>>>>fields=', fields); // fields contains extra meta data about results, if available
//     }
// );

/////////////////////////////////
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})