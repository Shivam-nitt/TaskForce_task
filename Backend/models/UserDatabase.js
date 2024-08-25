const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/TaskForceDatabase")
.then(()=>{
    console.log("database connected");
})

const Userschema = new mongoose.Schema({
    Username:{
        type:String,
        unique:true,
    },
    Class:{
        type:String,
    }
});

module.exports = mongoose.model("UserModel",Userschema);