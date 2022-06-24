//Import Modules
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
//Import Data Model
const UserModel = require("../models/user");  

const _id = "id001"
const username = "User_1"
const password = "password"

router.get("/", (req, res) => {
    res.send("test")
})


//Add new Todo to Database
router.post("/", async (req, res)=>{


    //Create new User
    const hashPsw = await bcrypt.hash(password, 12); //hash Password
    

    user = new UserModel({ _id: _id, userName: username, password: hashPsw }); 

    try{
        await user.save(); 
        res.send("Added new Card");
    }
    catch(err){
        console.log(err);
    }

   res.write("new");

});

module.exports = router;