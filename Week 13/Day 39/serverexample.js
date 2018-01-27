var HTTP = require('http');

var PORT = 8080;

function handleRequest(request, response){
	response.end("It Works! Path hit: " + request.url);
}