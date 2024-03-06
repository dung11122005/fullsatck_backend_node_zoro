const express = require('express');
const router = express.Router();
// khai bao route
router.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs');
})
router.get('/abc', (req, res) => {
    res.send('<h1>DO THI QUYNH ANH CUTE GIRL</h1>')
})
module.exports = router;//export default