function amp(array){
	var string;
	if (array.length > 2) {
		string = array.join();
	console.log(string)
	string = string.replace(/\s*,\s*|\s+,/g, ' & ');
	console.log(string);
	} else {
		string = array[0];
	}
}

module.exports(amp);