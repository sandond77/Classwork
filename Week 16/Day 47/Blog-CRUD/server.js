// NSTRUCTIONS:

// The goal of this exercise is to add Sequelize CRUD methods inside each route specified in the comments in the api-routes.js file.

// Open the folder slacked out to you, run npm install

// Open the config folder and update the config.json file’s development object to match your own local MySQL database.

// Navigate to the api-routes.js file inside of the routes folder.

// Fill in each route with the code described in the comments to add each CRUD action.

// We can test our code works by checking to see if we have the following functionality (recommended order):

// Create a new post
// Get a list of all posts
// Get a list of all posts of a category
// Edit a post
// Delete a post
// If things aren’t working as expected, check to see if any errors logged to the terminal.


// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
