// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const PostsSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Phonenumber: {
        type: String
    },
    Password: {
        type : String
    },
    County: {
        type : String
    },
    State:{
        type: String
    },
    Address:{
        type: String
    }


});

module.exports = mongoose.model('posts', PostsSchema);