// Instructions

// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called “Player” with the following properties and methods...

// name: Property which contains the player’s name
// position: Property which holds the player’s position
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
// defense: Property which is a value between 1 and 10 to show how good this player is on defense
// goodGame: Method which increases either the player’s offense or defense property based upon a coinflip.
// badGame: Method which decreases either the player’s offense or defense property based upon a coinflip.
// printStats: Method which prints all of the player’s properties to the screen
// Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. It should take as user input the name, position, offense, and defense of each player.

// Once all of the players have been created, print their stats.

var inquirer = require('inquirer');
var team = [];
var starters = [];
var subs = [];
var score = 0;

function Player(name,position,offense, defense){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
}

Player.prototype.goodGame = function() {
	if (Math.floor(Math.random() * 2) === 0) { 
		this.offense ++;
	} else {
		this.defense --;
	}
};

Player.prototype.badGame = function() {
	if (Math.floor(Math.random() * 2) === 0) { 
		this.offense ++;
	} else {
		this.defense --;
	}
};

Player.prototype.printStats = function() {
	console.log("Player Name: " + this.name );
	console.log("Position: " + this.position );
	console.log("Offense Ability: " + this.offense );
	console.log("Defensive Ability: " + this.defense + "\n");
};

var teamCreators = function(){
	if (team.length < 8) {
		inquirer.prompt([
			{
				name:"name",
				message:"What is the player's name?"
			},
			{
				name:"position",
				message:"What is this player's position?"
			},
			{
				name:"offense",
				message:"Give this player an offensive ability stat.",
				// validate: function(input){
			 //      	if (typeof input !== 'number') {
				//         console.log('You need to provide a number');
				//         return;
			 //      	}
				// }
			},
			{
				name:"defense",
				message:"Give this player a defense ability stat.",
				// validate: function(input){
			 //      	if (typeof input !== 'number') {
				//         console.log('You need to provide a number');
				//         return;
			 //      	}
				// }
			}

		]).then(function(answers){
			var players = new Player(answers.name, answers.position, answers.offense, answers.defense);

			if (team.length < 5) {
				team.push(players);
				starters.push(players)
			} else {
				team.push(players);
				subs.push(players)
			}
			teamCreators();
		})
	} else {
		console.log("There are already 8 players on the team!");
		console.log("# of players :" + team.length);
		console.log("# of starters: " + starters.length);
		console.log("# of subs: " + subs.length + '\n');

		for (var i = 0; i < team.length; i++) {
			team[i].printStats();
		}
	}
}

teamCreators();

function playGame(){
	var random1 = Math.floor(Math.random()*20)+1;
	var random2 = Math.floor(Math.random()*20)+1;

	for (var i = team.length - 1; i >= 0; i--) {
		var totalOffense += team[i].offense
		var totalDefense += team[i].defense
	}

	if (random1 < totalOffense) {
		score ++;
	}

	if (random2 > totalDefense) {
		score --;
	}
}



// Once your code is functioning properly, move on to create a function called “playGame” which will be run after all of the players have been created and will do the following:

// Run 5 times. Each time the function runs:
// Two random numbers between 1 and 20 are rolled and compared against the starters’ offensive and defensive stats
// If the first number is lower than the sum of the team’s offensive stat, add one point to the team’s score.
// If the second number is higher than the sum of the team’s defensive stat, remove one point from the team’s score.
// After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with 1 player from within the subs array.
// After the game has finished (been run 5 times):
// If the score is positive, run goodGame for all of the players currently within the starters array.
// If the score is negative, run badGame for all of the players currently within the starters array.
// If the score is equal to zero, do nothing with the starters.
// Give the user a message about if they won, and the status of their starters.
// After printing the results, ask the user if they would like to play again.
// Run playGame from the start once more if they do.
// End the program if they don’t.
// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.