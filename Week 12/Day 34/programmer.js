// //In this activity, we are going to create a constructor function called “Programmer” which can be used to create objects containing information on various programmers.

// Your “Programmer” constructor should be able to take in the following information...

// The programmer’s name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.

// Finally, create a “Programmer” object and call the method to print its contentss

function Programmer(name,job,age,language){
	this.name = name;
	this.job = job;
	this.age = age;
	this.language = language;

	// this.printInfo = function(){
	// 	console.log("Programmer Name: " + this.name);
	// 	console.log("Position: " + this.job);
	// 	console.log("Age " + this.age);
	// 	console.log("Favorite language: " + this.language);
	// }
}

Programmer.prototype.printInfo = function(){
	console.log("Programmer Name: " + this.name);
	console.log("Position: " + this.job);
	console.log("Age " + this.age);
	console.log("Favorite language: " + this.language);
}



var bob = new Programmer ("bob", "loser", 40, "javascript");
bob.printInfo();