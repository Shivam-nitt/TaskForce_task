const express = require("express");
const app = express();
const PORT = 4000;
const RoutePage = require("./Router/Route");
const cors = require("cors");

app.use(cors());
app.use("/",RoutePage);


app.get("/",(req,res)=>{
    res.send("hello im in app");
});


app.listen(PORT,()=>{
    console.log(`hello im running on ${PORT}`)
});


