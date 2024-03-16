const express = require('express');

const routerAPI = express.Router();
const { getUserAPI } = require('../controllers/apicontrollers')
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: 'hello world with apis'
    })
});

routerAPI.get('/users', getUserAPI);
module.exports = routerAPI;//export default