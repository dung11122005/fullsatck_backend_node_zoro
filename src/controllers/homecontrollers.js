const { request, response } = require('express')
const connection = require('../config/database')
const { getallusers, getuserbyid, updateuserbyid, deleteuserbyid } = require('../services/CRUDservice');
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
    // console.log('>>>check results', results);
    res.redirect('/');
}

const getupdatepage = async (req, res) => {
    const userid = req.params.id;
    let user = await getuserbyid(userid)
    res.render('edit.ejs', { useredit: user });
}


const postupdateuser = async (req, res) => {
    let email = req.body.name_email;
    let name = req.body.name_ten;
    let city = req.body.name_city;
    let userid = req.body.name_id;
    // console.log('email:', email, 'name:', name, 'city:', name, 'userid', userid);
    await updateuserbyid(email, name, city, userid);
    res.redirect('/');
}

const postdeleteuser = async (req, res) => {
    const userid = req.params.id;
    let user = await getuserbyid(userid)
    res.render('delete.ejs', { useredit: user });
}

const posthandleremoveuser = async (req, res) => {
    let id = req.body.name_id;
    await deleteuserbyid(id);
    res.redirect('/')
}


const getcreatepage = (req, res) => {
    res.render('create.ejs');
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
    gethomepege, getabc, getcreatepage, postcreateuser, getupdatepage, postupdateuser, postdeleteuser, posthandleremoveuser
}