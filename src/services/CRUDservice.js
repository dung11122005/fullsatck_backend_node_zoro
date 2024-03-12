const connection = require('../config/database');
const getallusers = async (req, res) => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const getuserbyid = async (userid) => {
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userid]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateuserbyid = async (email, name, city, userid) => {
    let [results, fields] = await connection.query(
        ` 
        UPDATE Users 
        SET email  = ?, name = ?,  city= ?
        WHERE id = ?
        `, [email, name, city, userid]
    );
}
module.exports = {
    getallusers, getuserbyid, updateuserbyid
}