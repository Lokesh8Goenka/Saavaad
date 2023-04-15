const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(
    cors({
        origin: "*",
        credentials: true
    })
);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/ClicklDB");

const personSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Person = mongoose.model("Person", personSchema);

app.post("/login", (req, res) =>{
    console.log("inside login");
    Person.findOne({username: req.body.username})
    .then((user) =>{
        console.log(user);
    })
});

// const user = new Person ({
//     username : "Thillu",
//     password: "sairam"
// });

// user.save();

app.listen(8000, () =>{
    console.log("listening at port 8000");
});

