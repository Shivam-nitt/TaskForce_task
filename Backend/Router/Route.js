
const express  = require("express");
const router = express.Router();
const UserModel = require("../models/UserDatabase");


router.get("/classA",async (req,res)=>{
   const StudentA = await UserModel.find({Class:"ClassA"});
   res.json(StudentA);
});

router.get("/classB",async (req,res)=>{
    const StudentB = await UserModel.find({Class:"ClassB"});
    res.json(StudentB);
 });

module.exports = router;