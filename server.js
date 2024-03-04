const express = require('express')//commonjs
const app = express()// app express
const port = 8080// port

// khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/abcd', (req, res) => {
    res.send('HOANG TAN DUNG LOVE BACKEND')
})
app.get('/jszero', (req, res) => {
    res.send('<h1>DO THI QUYNH ANH </h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})