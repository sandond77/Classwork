var WeatherAdmin = require('./WeatherAdmin')


var role = process.argv[2];
var name = process.argv[3]
var address = process.argv[4];
var short = new WeatherAdmin();

if (role === 'user') {
	short.newUserSearch(name,address)
	// console.log(weather.newUserSearch(arg,arg2));
} else if (role ==='admin'){
	short.getData();
} else {
	console.log("You did not enter a valid input");
}