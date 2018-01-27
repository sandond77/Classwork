// Instructions

// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

var good = ["Hi Beautiful","You're looking good today","Hey did you lose weight?","Your outfit looks amazing today!"];
var bad = ["Hi Ugly","You look terrible today","Hey did you get fatter?","What are you wearing?"];
var seed = Math.floor(Math.random()*4);

function handleRequest(request, response){
	response.end("It Works! Path hit: " + request.url);
}


var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server is listening on http://localhost:%s", PORT)
	console.log(good[seed]);
})

server2.listen(PORT2, function(){
	console.log("Server is listening on http://localhost:%s", PORT2)
	console.log(bad[seed]);
})


// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});