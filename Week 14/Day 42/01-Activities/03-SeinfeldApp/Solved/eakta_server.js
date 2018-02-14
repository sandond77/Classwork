//This is Eakta's solution.  Notice the Switch/Case block below.

// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Specify the port.
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/:about/:att?", function(req, res) {

  var about = req.params.about;
  var att = req.params.att;

switch(about){
  case "cast":
  showAll();
  break;

  case "coolness-chart":
  cool();
  break;

  case "attitude-chart":
  attitude() 
  break;

}

function html(result,head){
  var html = head;
  html += "<ul>";
  for (var i = 0; i < result.length; i++) {
    html += "<li><p> ID: " + result[i].id + "</p>";
    html += "<p>Name: " + result[i].name + " </p></li>";
    html += "<p>Coolness Point: " + result[i].coolness_points + " </p></li>";
    html += "<p>Attitude: " + result[i].attitude + " </p></li>";
  }
  html += "</ul>";
  res.send(html);
}

function showAll(){
  connection.query("SELECT * FROM actors", function(err, result) {
    var head = "<h1> Actors in our database </h1>";
    html(result,head);
  });
}

function cool(){
  connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err, result) {
    var head = "<h1> Top Cool Actors </h1>";
    html(result,head);   
  });
};

function attitude(){
  connection.query("SELECT * FROM actors WHERE attitude =?",att, function(err, result) {
    var head = "<h1> Actors with attitude! </h1>";
    html(result,head);
  });
}
});

app.listen(port);