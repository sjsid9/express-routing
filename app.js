var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there Welcome to my routing app!!!");
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal;
    switch (animal.toUpperCase()) {
        case "DOG":
        res.send("The dog says \'woof woof!\'");
        break;
        case "PIG":
        res.send("The pig says \'Oink\' ");
        break;
        case "COW":
        res.send("The cow says MOO!");
        break;
    }
});



app.get("/repeat/:string/:number", function (req, res) {
    var string = req.params.string;
    var number = Number(req.params.number);
    
    var result = "";
    
    for (var i = 0; i < number; i++) {
        result += string + " ";
    }
    
    res.send(result);
});


app.get("*", function (req, res) {
    res.send("Sorry Page not found, What are you doing with your life!!!");
});


app.listen(3000, function (req, res) {
    console.log("Server was stared!!");
});