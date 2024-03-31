require('dotenv').config()
const express = require('express');//commonjs
const path = require('path');//commonjs
const configviewengine = require('./config/viewengine');
const webrouter = require('./routes/web');
const apirouter = require('./routes/api');
const fileUpload = require('express-fileupload');
const connection = require('./config/database')
const { MongoClient } = require('mongodb');
// const Kitten = require('./models/kittan');
// console.log('>>> check env', process.env);


const app = express()// app express
const port = process.env.PORT || 8888; // port(8080) => hardcode . uat . pord
const hostname = process.env.HOST_NAME;// hostname(localhost)

//config file uploat
app.use(fileUpload());


//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine ----&&---- config static files
configviewengine(app);


// khai bao route
app.use('/', webrouter);
app.use('/v1/api/', apirouter);

// const cat = new Kitten({ name: 'hoi dan it cat' });
// cat.save();

//test connection
(async () => {
    try {
        //using monggoose
        // await connection();

        //using mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);

        // Database Name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const collection = db.collection('customers');


        collection.insertOne(
            {
                "name": "hoang tan dung",
                address: {
                    province: 'hn',
                    country: {
                        name: 'vietnam',
                        code: 100000
                    }
                }
            }
        )



        ////
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> error connection to DB", error);
    }
})();


/////////////////////////////////
