var status;

function pattern(string1,string2){
	var array1 = string1.split(" ");
	var array2 = string2.split("");
	
	for (var i = 0; i < array1.length -1 ; i++) {
		getAllIndexes(array1, array1[i], array2, array2[i]);
	}

	console.log("Does a unique pattern exist? " + status)
	status = "";
}

function getAllIndexes(array1, val , array2 , val2) {
    var indexes = [];
    var indexes2 = [];

    for(j = 0; j < array1.length; j++){
    	if (array1[j] === val){
            indexes.push(j);
            // console.log("indexes", indexes);
        }
    }

    for(k = 0; k < array1.length; k++){
    	if (array2[k] === val2){
            indexes2.push(k);
            // console.log("indexes2", indexes2);
        }
    }

    for (var l = 0; l < indexes.length; l++) {
    	if (indexes.length === indexes2.length) {
	    	if (indexes[l] === indexes2[l]) {
	    		if (status !==false) {
	    			status = true
	    		}
	    	} else {
	    		status = false;
	    	}
	    } else {
	    	status = false;
	    }
    } 
}


console.log('"apple banana cat apple apple","abcaa" (this should return true)')
pattern("apple banana cat apple apple","abcaa");

console.log('\n"apple banana cat apple apple", "abcde" (this should return false)')
pattern("apple banana cat apple apple", "abcde");

console.log('\n"blue yellow green", "abc" (this should return true)')
pattern("blue yellow green", "abc")

console.log('\n"blue yellow yellow", "abc" (this should return false)')
pattern("blue yellow yellow", "abc")

console.log('\n"truck whale car whale", "bctc" (this should return true)')
pattern("truck whale car whale", "bctc")

console.log('\n"blue yellow yellow", "abb" (this should return true)')
pattern("blue yellow yellow", "abb")

console.log('\n"bob rob gob dog", "abcd" (this should be true)')
pattern("bob rob gob dog", "abcd")

console.log('\n"bob rob gob dog dog cog dog", "abcdddd" (this should be false)')
pattern("bob rob gob dog dog dog cog", "abcdded")

console.log('\n"bob rob gob dog dog dog dog", "abcddd" (mismatched string lengths, this should be false)')
pattern("bob rob gob dog dog dog dog", "abcddd")

console.log('\njkfdjslj fjdskljf fjdskljf", "ac" (this should be false)')
pattern("jkfdjslj fjdskljf fjdskljf", "ac");

console.log('\n"jkfdjslj fjdskljf fjdskljf", "abc" (this should be false)')
pattern("jkfdjslj fjdskljf fjdskljf", "abc");

console.log('\n"jkfdjslj fjdskljf fjdskljf", "abb" (this should be trues)')
pattern("jkfdjslj fjdskljf fjdskljf", "abb");