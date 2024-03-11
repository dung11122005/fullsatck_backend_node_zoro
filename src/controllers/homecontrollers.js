const { request } = require('express')
const connection = require('../config/database')
const { getallusers } = require('../services/CRUDservice');
const gethomepege = async (req, res) => {
    // console.log('>>>> check rows', results);
    let results = await getallusers();
    return res.render('home.ejs', { listusers: results });
}

const postcreateuser = async (req, res) => {
    let email = req.body.name_email;
    let name = req.body.name_ten;
    let city = req.body.name_city;
    console.log('email:', email, 'name:', name, 'city:', name);

    // connection.query(
    //     ` INSERT INTO Users(email, name, city)
    //     VALUES(?, ?, ?) `,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('create user succeed')
    //     }
    // );
    let [results, fields] = await connection.query(
        ` INSERT INTO Users(email, name, city)  VALUES(?, ?, ?) `, [email, name, city]
    );
    console.log('>>>check results', results);
    res.send('create new user succeed');
}

const getcreatepage = (req, res) => {
    res.render('create.ejs')
}


const getabc = (req, res) => {
    let Users = []
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            Users = results;
            console.log('>>>> results=', results); // results contains rows returned by server
            // console.log('>>>>>>fields=', fields); // fields contains extra meta data about results, if available
            console.log('>>>> check users=', Users)
            res.send(JSON.stringify(Users));
        }
    );
}
module.exports = {   //   dấu {..} dùng cho nhiều files
    gethomepege, getabc, getcreatepage, postcreateuser
}