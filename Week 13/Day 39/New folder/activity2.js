// Instructions:

// Create a website with four routes:
// Home
// Favorite Food
// Favorite Movies
// Favorite CSS Frameworks
// Each route should be triggered by a different URL.
// Each route should display an HTML page listing your favorite three things of each.
// Be sure to use fs to serve your HTML files.


var http = require('http');
var fs = require('fs');

var PORT = 8080;
var server = http.createServer(handleRequest);

function handleRequest(req,res){

	// fs.readFile(__dirname + "/home.html", function(err,data){
	// 	if (err) throw err;
	// 	res.writeHead(200, {"Content-Type": "text/html"});
	// 	res.end(data)
	// })
	var address = req.url;
	switch(address){
		case "/home.html":
			fs.readFile(__dirname + address, function(err,data){
				if (err) throw err;
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(data)
			})

		case "/food.html":
			fs.readFile(__dirname + address, function(err,data){
				if (err) throw err;
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(data)
			})

		case "/movie.html":
			fs.readFile(__dirname + address, function(err,data){
				if (err) throw err;
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(data)
			})	
			
		
		case "/framework.html":
			fs.readFile(__dirname + address, function(err,data){
				if (err) throw err;
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(data)
			})
	}
}

server.listen(PORT,function(){
	console.log("Server is listening on PORT: " + PORT);
})