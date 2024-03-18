const mongoose = require('mongoose');
//shape data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;