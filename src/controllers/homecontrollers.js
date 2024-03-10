const connection = require('../config/database')
const gethomepege = (req, res) => {
    return res.render('home.ejs')
}
const postcreateuser = (req, res) => {
    console.log('>>req.body: ', req.body)
    res.send('create a new user')
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
    gethomepege, getabc, postcreateuser
}