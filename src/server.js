require('dotenv').config()
const express = require('express');//commonjs
const path = require('path');//commonjs
const configviewengine = require('./config/viewengine');
const webrouter = require('./routes/web');
console.log('>>> check env', process.env);


const app = express()// app express
const port = process.env.PORT || 8888; // port(8080) => hardcode . uat . pord
const hostname = process.env.HOST_NAME;// hostname(localhost)


//config template engine ----&&---- config static files
configviewengine(app);


// khai bao route
app.use('/', webrouter);


/////////////////////////////////
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})