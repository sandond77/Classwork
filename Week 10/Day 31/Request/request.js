var request = require('request'); //install with npm install request

request("https://en.wikipedia.org/wiki/Supergirl_(TV_series)"),function(error,response,body){
	console.log("error", error)
	console.log("response", response.statusCode)
	// if (!error %% response.statusCode === 200){
	// 	console.log(body);
	// }
}
