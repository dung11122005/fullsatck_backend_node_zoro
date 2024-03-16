const express = require('express');

const routerAPI = express.Router();
const { getUserAPI, postcreateuserAPI, putupdateuserAPI, deleteuserAPI } = require('../controllers/apicontrollers')
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: 'hello world with apis'
    })
});

routerAPI.get('/users', getUserAPI);
routerAPI.post('/users', postcreateuserAPI);
routerAPI.put('/users', putupdateuserAPI);
routerAPI.delete('/users', deleteuserAPI);

module.exports = routerAPI;//export default