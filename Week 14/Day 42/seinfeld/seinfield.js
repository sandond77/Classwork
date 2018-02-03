//Create a seinfeld_db database with an actors table. 

// The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).
// Add in four actors with different names, coolness_points, and attitudes.

// Create a Node Application with Express, MySQL, and Body Parser with three Express routes.

// Create a /cast route that will display all the actors and their data ordered by their id’s.

// Create a /coolness-chart route that will display all the actors and their data ordered by their coolness points.

// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "falcon415",
	database: "seinfeld"
});

connection.connect(function(err){
	if (err) throw err;
})

connection.query("SELECT * FROM actors ORDER BY id", function(err, results){
	if (err) throw err;
	require("./routes/cast.js")(app, results);
});


connection.query("SELECT * FROM actors ORDER BY coolness_points DESC; ", function(err, results){
	if (err) throw err;
	require("./routes/coolness-chart.js")(app, results);
});

app.get("/attitude-chart/:att", function(req,res) {
	var att = req.params.att;
	connection.query("SELECT * FROM actors WHERE attitude=?",[att], function(err, results){
	if (err) throw err;
		require("./routes/attitude-chart.js")(res, results);
		res.send(html);
	});
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function(){
	console.log("App is listening on PORT",PORT);
})

