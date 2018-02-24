function frequent(array){
	var length = 0;
	var value;
	var holder = [];
	for (var i = 0; i < array.length - 1 ; i++) {
	 	for (var j = 0; j < array.length -1; j++) {
	 		if (array[j] = array[i]) {
	 			holder.push(array[j]);
	 			console.log(holder)

	 			if (length < holder.length) {
	 			length = holder.length
	 			value = holder[0];
	 			}
	 		}

	 		holder = [];
	 	} 
	}

	console.log("the number of occurences is: " + length);
	console.log("the most frequent character is: "+ value);
}

var array = [3,2,4,4,6,4,1];
frequent(array);