// Instructions

// Create an app with Express, MySQL and Handlebars.

// HINT: this app will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.
// Create a schema.sql file and create the following inside of that file:

// Make a database called “wishes_db”

// Inside of that database, make a table called “wishes” which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.

// Run your schema.sql file within MySQL Workbench before moving onto the next steps.

// In your server.js file, you will have to create two routes: a get route for ‘/’ and a post route for ‘/’.

// Render all of the wishes from the wishes table when the ‘/’ get route is hit. Additionally show the form that the user can use to create a new wish. The form will POST to the ‘/’ route.

// The ‘/’ post route will insert the wish from the form into the wishes table and will redirect the user back to the ‘/’ get route.

// Message #activities

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "falcon415",
  database: "wish_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM wishes;", function(err, data) {
    if (err) throw err;

    res.render("index", { wish: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(port, function(){
	console.log("APP is listening on PORT",port);
});
