var action = process.argv[2];
var input1 = process.argv[3];
var input2 = process.argv[4];

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "falcon415",
	database: "top_songsdb"
});

connection.connect(function(err){
	if (err) throw err;
})

function artist(search){
	connection.query(
		"SELECT * FROM top5000 WHERE Artist='"+search+"'", function(error,response){
			console.log("You searched for: " + search + '\n')
			console.log(response);
	})
}



function multiple(){
	connection.query(
		"SELECT Artist, COUNT(*) appearances FROM top5000 GROUP BY Artist HAVING appearances > 1", function(error,response){
			console.log("Multiple Listings");
			console.log(response);
	})
}

function range(arg1,arg2){
	connection.query(
		"SELECT * FROM top5000 WHERE id BETWEEN " + arg1 + " AND " + arg2, function(error,response){
			console.log("Range Search");
			console.log(response);
	})
}

function song(arg){
	connection.query(
		"SELECT * FROM top5000 WHERE Songs='"+arg+"'", function(error,response){
			console.log("Song Search");
			console.log(response);
	})
}


if (action === "artist"){
	artist(input1)
} else if (action === "multiple"){
	multiple()
} else if (action === "range"){
	range(input1,input2)
} else if (action === "song"){
	song(input1)
} else {
	console.log("Please an action(artist,multiple,range,song) and required inputs for it.")
}

