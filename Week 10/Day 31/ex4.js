var fs = require('fs');

var textfile = process.argv[2];

fs.appendFile(textfile, 'Hello Kitty', function(error){
	if (error) {
		console.log("There is an error: ", err);
	}
})