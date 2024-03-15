require('dotenv').config()
const express = require('express');//commonjs
const path = require('path');//commonjs
const configviewengine = require('./config/viewengine');
const webrouter = require('./routes/web');
const connection = require('./config/database')
const Kitten = require('./models/kittan');
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

const cat = new Kitten({ name: 'hoi dan it cat' });
cat.save();

//test connection
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> error connection to DB", error);
    }
})();


/////////////////////////////////
