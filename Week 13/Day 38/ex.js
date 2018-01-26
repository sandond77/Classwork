
// # Node + MySQL PopQuiz

// ## Using the `terminal` or your favorite MySQL GUI
// 1. Connect to MySQL server 
// 2. Create a new Database
// 3. Create a new table with a primary key that auto-increments, and a text field
// 4. Insert 3 Rows into your new table

// ## Using Node / IDE of your choice
// 1. Create a package.json
// 2. Require `mysql`
// 3. Connect to MySQL
// 4. Print the 3 rows of data to the `console`

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "falcon415",
	database: "quiz_db"
});

connection.connect(function(err){
	if (err) throw err;
})

connection.query(
	"INSERT INTO pop SET ?",
	{
		Name: "asdfjasdlkfas",
		Filler: "AJAJAJA",
		value: 12312,
	})

connection.query(
	"SELECT * FROM pop", function(error,response){
		console.log(response);
	})