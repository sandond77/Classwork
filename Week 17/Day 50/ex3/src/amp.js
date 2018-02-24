function amp(array){
	var string;
	if (array.length > 1) {
		string = array.join();
		string = string.replace(/\s*,\s*|\s+,/g, ' & ');
	} else {
		string = array[0];
	}
};

module.exports = amp;
