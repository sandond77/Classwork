//Using the app skeleton provided to you:
// Create a MySQL database named ‘chirpy’ with a ‘chirps’ table to hold your data.x
// Your ‘chirp’ table should include a field for id, author, chirp, and time created.x
// Modify the connection.js file to create a connection to your database.x
// Modify the api-routes.js file so that there is a route for adding a new chirp, as well as retrieving all chirps.
// Modify the chirps.js file so that the page interacts with the database.
// BONUS:  If you finish early, have them work on routes for editing and deleting chirps. *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
