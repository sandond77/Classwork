// Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.

// Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.

// Write a function that accepts a function (F) and a value (V), and returns a function that returns the result of running F on V. This sounds tricky, but it’s easier than it sounds—just take it step by step!

// Finally, write a short message to a file using fs.writeFile. Does this function use callbacks? If so, identify them.

var arg1 = process.argv[2]

// one(arg1,Inner());

// function one(arg1,arg2){
// 	console.log("arg1: " + arg1);
// 	Inner();
// }

function Inner(){
	console.log("function as argument");
}

function InnerTwo(){
	console.log("function as argument");
}



// function three()

if (arg1 === "true" || arg1 === "false"){
	two(arg1,InnerTwo())
}

function two(arg1,arg2){
	if (arg1 === "true") {
		InnerTwo();
	}
}

