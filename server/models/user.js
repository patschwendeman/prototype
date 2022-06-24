//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const UserSchema = new mongoose.Schema( {
    _id: String,
    userName: String,
    password: String

});

//Representation of the insatnce of the collection in the DB
const UserModel = mongoose.model('user', UserSchema); 

module.exports = UserModel; 