const mongoose = require('mongoose');

let conn = null;

module.exports = connectDatabase = async ()=> {
    if (conn == null) {
        conn =await mongoose.connect('mongodb+srv://AmanJadon:Gemini%4012345@cluster0.ud7w084.mongodb.net/todo?retryWrites=true&w=majority')
        return conn;
    }
    console.log('connection established')
};
