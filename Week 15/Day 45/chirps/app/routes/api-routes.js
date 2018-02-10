// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
	app.get("/api/all", function(req, res) {
		// res.sendFile(path.join(__dirname, "../public/index.html"));
	  	connection.query("SELECT * FROM chirps;", function(err, data1) {
	    if (err) throw err;
	    res.json(data1);
	  });
	});


  // Add a chirp
  	app.post("/api/new", function(req, res) {
  		console.log(req.body)
  		var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES ";

	  	connection.query(dbQuery, [req.body.author, req.body.body. req.body.created_at], function(err, data2) {
	    if (err) throw err;
	    console.log("Chip successfully saved");
	    res.end();
	  });
	});

};
