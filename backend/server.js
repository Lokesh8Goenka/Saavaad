const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.set("strictQuery", false);
    mongoose.set("mongodb://127.0.0.1:27017/ClicklDB");

app.listen(6000, () =>{
    console.log("listening at port 6000");
});

