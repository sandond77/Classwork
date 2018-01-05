var data = require("./data.js")
var input = process.argv[2];
console.log(data)

if (input){
	// for (i in data){
		if (data.hasOwnProperty(input)){
			console.log("A " + input + " band is " +data[input])
		} else {
			console.log("Your input is not a valid genre")
		}
	// }

} else { 
	console.log("A punk band is " + data.punk)
	console.log("A rap band is " + data.rap)
	console.log("A classic band is " + data.classic)
}
