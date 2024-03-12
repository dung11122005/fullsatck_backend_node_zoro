const express = require('express');
const { gethomepege, getabc, getcreatepage, postcreateuser, getupdatepage, postupdateuser } = require('../controllers/homecontrollers');
const router = express.Router();
// router.Method('/route', handler);

// khai bao route
// router.get('/', (req, res) => {                          *(1)
//     res.render('sample.ejs');
// })
router.get('/', gethomepege); //                            *(1)
router.get('/abc', getabc);
router.get('/create', getcreatepage);
router.post('/create-user', postcreateuser);
router.get('/update/:id', getupdatepage);
router.post('/update-user', postupdateuser);

module.exports = router;//export default