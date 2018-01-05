var operator = process.argv[2];
var arg1 = parseInt(process.argv[3]);
var arg2 = parseInt(process.argv[4]);
var algebra = process.argv[3];
var answer;
var concat = [];
var concat2 = [];
var concat3 = [];

if (operator==="add"){
	answer = arg1 + arg2;
	console.log(arg1 + "+" + arg2 + "=" + answer);
} else if (operator ==="subtract"){
	answer = arg1 - arg2;
	console.log(arg1 + "-" + arg2 + "=" + answer);
} else if (operator ==="multiply"){
	answer = arg1 * arg2;
	console.log(arg1 + "*" + arg2 + "=" + answer);
} else if (operator ==="divide"){
	answer = arg1 / arg2;
	console.log(arg1 + "/" + arg2 + "=" + answer);
} else if (operator ==="remainder"){
	answer = arg1 % arg2;
	console.log(arg1 + "%" + arg2 + "=" + answer);
} else if (operator ==="exp"){
	answer = arg1 ** arg2;
	console.log(arg1 + "^" + arg2 + "=" + answer);
} else if (operator ==="algebra"){
	var variable = algebra.indexOf("x");
	var add = algebra.indexOf("+");
	var equal = algebra.indexOf("=");

	for (var i = 0; i < variable; i++) {
		concat.push(algebra[i]);
	}

	concat = concat.join("");
	concat = parseInt(concat);

	for (var i = add + 1; i < equal; i++) {
		concat2.push(algebra[i]);
	}

	concat2 = concat2.join("");
	concat2 = parseInt(concat2);

	for (var i = equal + 1; i < algebra.length ; i++) {
		concat3.push(algebra[i]);
	}

	concat3 = concat3.join("");
	concat3 = parseInt(concat3);

	answer = concat3 - concat2;
	answer = answer / concat;
	console.log("For " + algebra + ", x is equal to " + answer);
}