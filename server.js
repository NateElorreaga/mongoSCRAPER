var express = require("express");
var expressHandlebars = require("express-handlebars")
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

var PORT = process.env.PORT || 3000;


// Configure middleware
// Start the handlebars engine
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB

//route to home
app.get("/", function(req, res) {
    res.render("index");
});


// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
  });