//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const CardSchema = new mongoose.Schema( {
    _id: String,
    quest: String,
    answer: String

});

//Representation of the insatnce of the collection in the DB
const CardModel = mongoose.model('card', CardSchema); 

module.exports = CardModel; 


