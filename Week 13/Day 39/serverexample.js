var HTTP = require('http');

var PORT = 8080;

function handleRequest(request, response){
	response.end("It Works! Path hit: " + request.url);
}

var server = HTTP.createServer(handleRequest)

server.listen(PORT,function(){
	console.log("Server listening on http://localhost:%s", PORT);
})