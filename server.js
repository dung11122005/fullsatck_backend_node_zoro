const express = require('express')//commonjs
const path = require('path');//commonjs


const app = express()// app express
const port = 8080// port


//config template engine 
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs')


// khai bao route
app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs');
})
app.get('/abcd', (req, res) => {
    res.send('HOANG TAN DUNG LOVE BACKEND')
})
app.get('/jszero', (req, res) => {
    res.send('<h1>DO THI QUYNH ANH </h1>')
})


/////////////////////////////////
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})