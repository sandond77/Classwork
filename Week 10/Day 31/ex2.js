var fs = require('fs');

fs.writeFile("movies.txt", 'Jaws, Jumanji, GodFather', function (err){
	if (err){
		console.log("We have an error: ", err);
	}
});
	

fs.readFile("movies.txt","utf8", function(error,data){
	if (error){
		console.log("Error reading file: ", error)
	}
	var dataArray = data.split(',');
	console.log('dataArray', dataArray)
})