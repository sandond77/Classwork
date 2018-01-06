var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', function(error,data){
	if (error){
		console.log("Error reading file: ", error);
	}

	// console.log(data)
	var data = data.split(',');

	for (var i = 0; i < data.length; i++) {
	 console.log(data[i])
	}

})