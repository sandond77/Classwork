var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "falcon415",
	database: "music_DB"
});

var genre = process.argv[2];

// console.log("connection",connection);

connection.connect(function(err){
	if (err) throw err;
	// console.log("connected as id: ", connection.threadId);
	// readSongs();
	// genreFinder(genre);
	createSongs();
	updateSongs();
	deleteSongs();
})

function genreFinder(genre){
	connection.query("SELECT * FROM songs WHERE Genre= " + "'" + genre + " ' ", function(err,genreResults){
		if (err) throw err;
		console.log("\nDisplaying Search Results For: " + genre + '\n');
		console.log("-----------------------------------"+ '\n');
		for (var i = 0; i < genreResults.length; i++) {
			console.log("Id: " + genreResults[i].Id);
			console.log("Title: " + genreResults[i].Title);
			console.log("Artist: " + genreResults[i].Artist);
			console.log("Genre: " + genreResults[i].Genre + '\n');
		}
	});
}

// It’s time to start making our playlist application a little more functional through including all four C.R.U.D elements within it.

// Add in some pieces of code that CREATE, UPDATE, and DELETE specific pieces of data from your MySQL database. Make sure to include a READ statement at the end as well to ensure that the changes you are making are working properly.

// BONUS: After successfully adding CRUD to your application, it’s time to test your mettle and see if you can make it so this app is more dynamic. Add the ability for users to dynamically input their own data into the database using the Inquirer NPM package.

// HINT: Recall that you can create MySQL queries which include variables using question marks. Proper usage of this will help you quite a bit.

// HINT: Remember to take into account the scope of Inquirer package when putting your application together.



function createSongs (){
	console.log("\nAdding Songs to the Table\n");
	console.log("-----------------------------------\n");
	var create = connection.query(
		"INSERT INTO songs SET ?",
		{
			Title: "Truly, Madly, Deeply",
			Artist: "Savage Garden",
			Genre: "Pop",
		},
		function(error, res){
			console.log(res.affectedRows + " songs inserted");
		}
	);	
	readSongs();
}

function readSongs(){
	var read = connection.query("SELECT * FROM songs", function(err,results){
		if (err) throw err;
		console.log("results", results)
		console.log("\n----------------------------------\n")
	});
}

function updateSongs (){
	console.log("\nAdding Songs to the Table\n");
	console.log("-----------------------------------\n");
	var update = connection.query(
		"UPDATE songs SET ? WHERE ?",
		[{
			Title: "Crash and Burn"
		},
		{
			Artist: "Savage Garden"
		}],
		function(error, res){
			console.log(res.affectedRows + " songs updated");
		}
	);	
	readSongs();
}

function deleteSongs(){
	console.log("\nDeleting Songs to the Table\n");
	console.log("-----------------------------------\n");
	var deletion = connection.query(
		"DELETE FROM songs WHERE ?",
		[{
			Title: "Human"
		},
		{
			Artist: "Krewella"
		},
		{
			Genre: "Dance"
		}],
		function(error, res){
			console.log(res.affectedRows + " songs deleted");
		}
	);
	readSongs();
}