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

const { postcreatercustomer,
    postcreaterarraycustomer
} = require('../controllers/customercontrollers');

routerAPI.get('/users', getUserAPI);
routerAPI.post('/users', postcreateuserAPI);
routerAPI.put('/users', putupdateuserAPI);
routerAPI.delete('/users', deleteuserAPI);


routerAPI.post('/file', postuploatsinglefileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);


routerAPI.post('/customers', postcreatercustomer);
routerAPI.post('/customers-many', postcreaterarraycustomer);


module.exports = routerAPI;//export default