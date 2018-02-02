var express = require('express');

var PORT = 3000 || process.env.PORT;

var app = express();

app.listen(PORT, function(response){
	console.log("App is listening on PORT " + PORT);
})