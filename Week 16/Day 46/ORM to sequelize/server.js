// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//// Navigate to the server.js file and require all of our models by requiring the models folder. Save this to a variable and name it “db”.
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

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

// Starting our Express app
// =============================================================

db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
  		console.log("App listening on PORT " + PORT);
	});
});
