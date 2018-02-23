function pattern(string1,string2){
	var array1 = string1.split(" ");
	var array2 = string2.split("");
	
	for (var i = 0; i < array1.length -1 ; i++) {
		getAllIndexes(array1, array1[i], array2 );
	}


}

var string1 = "apple banana cat apple apple";
var string2 = "abcde";

pattern(string1,string2);

function getAllIndexes(array1, val , array2) {
    var indexes = [], i;

    for(i = 0; i < array1.length; i++){
    	if (array1[i] === val){
            indexes.push(i);
            console.log(indexes);

	        for (var j = 0; j < indexes.length; j++) {
	        	var index = indexes[j];

	        	if (array1[index] === array1[i] && array2[index] === array2[i]) {
	        		status = true;
	        	} else {
	        		status = false;
	        	}
	        }
        }
    }

    console.log(status)
}
