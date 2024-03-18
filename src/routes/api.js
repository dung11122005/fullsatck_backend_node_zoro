const express = require('express');

const routerAPI = express.Router();
const { getUserAPI, postcreateuserAPI, putupdateuserAPI, deleteuserAPI,
    postuploatsinglefileAPI, postUploadMultipleFilesAPI
} = require('../controllers/apicontrollers')
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: 'hello world with apis'
    })
});

routerAPI.get('/users', getUserAPI);
routerAPI.post('/users', postcreateuserAPI);
routerAPI.put('/users', putupdateuserAPI);
routerAPI.delete('/users', deleteuserAPI);
routerAPI.post('/file', postuploatsinglefileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);

module.exports = routerAPI;//export default