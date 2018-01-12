function Creator (name,job,sex,number,strength,hp){
	this.character = name;
	this.profession = job;
	this.gender = sex;
	this.age = number;
	this.strength = strength;
	this.hitpoints = hp;
	this.printStats = function (){
		console.log('\n' + "Character Name: " + this.character);
		console.log("Profession: " + this.profession)
		console.log("Gender: " + this.gender)
		console.log("Age: " + this.age)
		console.log("Strength: " + this.strength)
		console.log("Health: " + this.hitpoints + '\n')
	}
}

var char1 = new Creator("Bob", "Mailman", "Male", 30, 10, 100)
var char2 = new Creator("Rob", "Mailman II", "Male", 25, 15, 100)
char1.printStats();

function live(arg){
	if (arg.hitpoints > 0){
		console.log(arg.character + " is alive" + '\n');
	} else {
		console.log(arg.character + " is dead" + '\n')
	}
}

live(char1);

function fight(arg,arg2){
	arg.hitpoints -=   arg2.strength
	console.log(arg.character + " has " + arg.hitpoints + " remaining"+ '\n')
	live(arg)
}

fight(char1,char2)

function level(arg){
	arg.age += 1;
	arg.strength += 5;
	arg.hitpoints += 25;
	console.log(arg.character + " has level up!");
	console.log("Age increased! " + arg.age);
	console.log("Strength increased! " + arg.strength);
	console.log("Hitpoints increased! " + arg.hitpoints);
}

level(char1);