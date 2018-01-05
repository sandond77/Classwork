// console.log("BLAH BLAH BLAH NODE IS WORKING")
var process1 = process.argv[2];
var process2 = process.argv[3];

if (process.argv[2]===process.argv[3]) {
	console.log("They are the same!")
} else {
	console.log("They are not the same!")
}

console.log((process1==process2));
console.log((process1==process2) ? "Yes they are equal" : "No they are not equal");

console.log("The values are", (process1==process2) ? "equal" : "not equal");