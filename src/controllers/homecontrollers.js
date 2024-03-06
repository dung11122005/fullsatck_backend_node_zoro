const gethomepege = (req, res) => {
    //process data
    //call model
    res.render('sample.ejs');
}
const getabc = (req, res) => {
    res.send('<h1>DO THI QUYNH ANH CUTE GIRL</h1>');
}
module.exports = {   //   dấu {..} dùng cho nhiều files
    gethomepege, getabc
}