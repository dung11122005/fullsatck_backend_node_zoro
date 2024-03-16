const User = require('../models/user');

const getUserAPI = async (req, res) => {
    // console.log('>>>> check rows', results);
    let results = await User.find({});//await getallusers();

    return res.status(200).json({
        errorcode: 0,
        data: results
    })
}

module.exports = {
    getUserAPI
}