const mongoose = require('mongoose');
// import { uri } from './credentials';
let conn = null;

module.exports = connectDatabase = async ()=> {
    if (conn == null) {
        conn =await mongoose.connect(process.env.DB)
        return conn;
    }
    console.log('connection established')
};
