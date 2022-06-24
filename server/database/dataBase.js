const express = require('express');
const mongoose = require("mongoose");

const oldURI = "mongodb+srv://eap4d:m20biw0w@cluster0.uv4nr.mongodb.net/cards?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://Project:Password@cluster0.8w636pp.mongodb.net/?retryWrites=true&w=majority";

//Connection to MongoDB Atlas Database Cluster
const db = mongoose.connect(
    mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = db; 