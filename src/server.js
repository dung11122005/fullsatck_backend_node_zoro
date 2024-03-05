const express = require('express');//commonjs
// const { hostname } = require('os');
const path = require('path');//commonjs
require('dotenv').config()
console.log('>>> check env', process.env);


const app = express()// app express
const port = process.env.PORT || 8888; // port(8080) => hardcode . uat . pord
const hostname = process.env.HOST_NAME;// hostname(localhost)


//config template engine 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')


// khai bao route
app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs');
})
app.get('/abc', (req, res) => {
    res.send('<h1>DO THI QUYNH ANH </h1>')
})


/////////////////////////////////
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})