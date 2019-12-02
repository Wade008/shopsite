//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

// home route
app.get("/", function(req,res){
  res.render("home");
});

// contact route

app.get("/contact", function(req,res){
// pass api key from here

  res.render("contact");
});

// Listener
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
