const fileUpload = require('express-fileupload');
const User = require('../models/user');
const { uploatsinglefile, uploatmultiplefile } = require('../services/fileservices');

const getUserAPI = async (req, res) => {
    // console.log('>>>> check rows', results);
    let results = await User.find({});//await getallusers();

    return res.status(200).json({
        errorcode: 0,
        data: results
    })
}

const postcreateuserAPI = async (req, res) => {
    let email = req.body.name_email;
    let name = req.body.name_ten;
    let city = req.body.name_city;
    console.log('email:', email, 'name:', name, 'city:', name);
    let user = await User.create({
        email: email,
        name: name,
        city: city,
    })
    return res.status(200).json({
        errorcode: 0,
        data: user
    })
}

const putupdateuserAPI = async (req, res) => {
    let email = req.body.name_email;
    let name = req.body.name_ten;
    let city = req.body.name_city;
    let userid = req.body.name_id;
    // console.log('email:', email, 'name:', name, 'city:', name, 'userid', userid);
    // await updateuserbyid(email, name, city, userid);
    let user = await User.updateOne({ _id: userid }, { name: name, email: email, city: city });
    return res.status(200).json({
        errorcode: 0,
        data: user
    })
}

const deleteuserAPI = async (req, res) => {
    let id = req.body.name_id;
    // await deleteuserbyid(id);
    let result = await User.deleteOne({
        _id: id,
    });
    return res.status(200).json({
        errorcode: 0,
        data: result
    })
}

const postuploatsinglefileAPI = async (req, res) => {
    // console.log("req. files = ", req.files);

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploatsinglefile(req.files.image);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}
const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (Array.isArray(req.files.image)) {
        let result = await uploatmultiplefile(req.files.image);

        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    } else {
        //upload single
        return await postUploadSingleFileApi(req, res);
    }
}
module.exports = {
    getUserAPI, postcreateuserAPI, putupdateuserAPI, deleteuserAPI,
    postuploatsinglefileAPI, postUploadMultipleFilesAPI
}