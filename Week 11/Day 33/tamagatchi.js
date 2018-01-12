var fs = require('fs');


function DigitalPal(){
	this.hunger = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;

	this.feed = function (){
		if (this.hunger){
			console.log("Thanks! That was yummy!")
			this.hunger = false;
		} else {
			console.log("No thanks! I'm full.")
		}
	}

	this.sleep = function (){
		if (this.sleepy){
			console.log("ZZZZZZZZZZZZ");
			this.sleepy = false;
			this.bored = true;
			this.ager();
		} else {
			console.log("No way! I'm not tired");
		}
	}

	this.play = function (){
		if (this.bored){
			console.log("Yay! Let's Play!")
		} else{
			console.log("Not right now. Later?");
		}
	}

	this.ager = function (){
		this.age += 1;
		console.log("Happy Birthday to me! I am " + this.age + " old!");
	}
}

var dog = new DigitalPal();

dog.outside = false;

dog.barker = function () {
	console.log("Woof! Woof!");
};

dog.goOutside = function (){
	if (this.outside) {
		console.log("We're already outside though...");
	} else {
		console.log("Yay! I love the outdoors!");
		this.outside = true;
	}
}

dog.goInside = function (){
	if (this.inside) {
		console.log("Do we have to? =( Fine...");
		this.outside = false;
	} else {
		console.log("I'm already inside...");
	}
}

var cat = new DigitalPal();

cat.HouseCondition = 100;

cat.meow = function (){
	console.log("Meow! Meow!");
}

cat.destroyFurniture = function (){
	if (this.HouseCondition > 0) {
		this.HouseCondition -= 10;
		this.bored = false;
		this.sleepy = true;
		console.log("ME SMASH!")
	} else {
		console.log("The House Condition is already 0!")
	}
}

cat.buyNewFurniture = function (){
	this.HouseCondition += 50;
	console.log("Are you sure about that?")
}

console.log('\n');
console.log(dog);
console.log('\n');
console.log(cat)

console.log('\n');
cat.sleep();
cat.destroyFurniture();
cat.sleep();

dog.play();
dog.goOutside();
dog.goOutside();
dog.goInside();
dog.goInside();