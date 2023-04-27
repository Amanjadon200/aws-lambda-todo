const mongoose = require('mongoose');

let conn = null;

module.exports = connectDatabase = async ()=> {
    if (conn == null) {
        // conn =await mongoose.connect(uri of your database )
        return conn;
    }
    console.log('connection established')
};
