// Instructions
// DROP DATABASE IF EXISTS greatBay_DB;
// CREATE DATABASE greatBay_DB;

// USE greatBay_DB;

// CREATE TABLE auctions(
//   id INT NOT NULL AUTO_INCREMENT,
//   item_name VARCHAR(100) NOT NULL,
//   category VARCHAR(45) NOT NULL,
//   starting_bid INT default 0,
//   highest_bid INT default 0,
//   PRIMARY KEY (id)
// );
// Within your groups you are going to be creating a Node application called “Great-Bay” which allows users to create and bid on assorted items, tasks, jobs, or projects.

var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "falcon415",
	database: "greatBay_DB"
});

connection.connect(function(err){
	if (err) throw err;
})


function start(){
	inquirer.prompt([
		{
		type: "list",
		message: "What Would You Like to Do?",
		choices: ["Post an item","Bid on an item"],
		name: "Action"
		}
	]).then(function(answers){
		// console.log(answers.Action);
		if (answers.Action === "Post an item") {
			console.log("post");
			postItem();
		} else if (answers.Action === "Bid on an item"){
			console.log("bid")
		}
	})

	start();
}
// The basic application is fairly simple: Upon loading up the program, the user is prompted on whether they would like to “POST AN ITEM” or “BID ON AN ITEM”

// If the user selects “POST AN ITEM” they are prompted for an assortment of information regarding the item and then that information is added to the database so that others can bid on it

function showAuctions(){
	var read = connection.query("SELECT * FROM auctions", function(err,results){
		if (err) throw err;
		console.log("Auctions", results)
		console.log("\n----------------------------------\n")
	});
}

function postItem(){
	inquirer.prompt([
		{
			type: "input",
			message: "What do you want to sell?",
			name: "Item"
		},
		{
			type: "input",
			message: "Give it a category",
			name: "Category"
		},
		{
			type: "input",
			message: "What is the Starting Bid?",
			name: "Starting_Bid"
		}
	]).then(function(answers){
		console.log("\nPosting Your Item!\n");
		console.log("-----------------------------------\n");
		var create = connection.query(
			"INSERT INTO auctions SET ?",
			{
				item_name: answers.Item,
				category: answers.Category,
				starting_bid: answers.Starting_Bid,
				highest_bid: answers.Starting_Bid
			}
		);	
		showAuctions();
	})
}


// If the user selects “BID ON AN ITEM” they are shown a list of all available items and then are prompted to select what they would like to bid on. The console then asks them how much they would like to bid, and their bid is compared to the previous highest bid. If their bid is higher, inform the user of their success and replace the previous bid with the new one. If their bid is lower (or equal), inform the user of their failure and boot them back to the selection screen.

bidItem();

function bidItem(){
	var read = connection.query("SELECT * FROM auctions", function(err,results){
		if (err) throw err;

		var items = [];

		for (var i = 0; i < results.length; i++) {
			items.push(results[i].item_name);
		}

		inquirer.prompt([
			{
				type: "list",
				message: "What Would You Like to Bid On?",
				choices: items,
				name: "Action"
			}
		]).then(function(answers){
			console.log(items);
		})
	});
}


// Once your group has put together the basic application, it’s time to test your collective skills on some additional functionality, or “addons”. Remember to take into consideration the amount of time you have been given when choosing what addons you would like to tackle.

// Create a sign up and login system that prompts users for a username and password upon loading up the app. Do not worry about setting up a truly secure database if you choose to tackle this addon. Just worry about building working sign up and login features.

// Create a system on the “POST AN ITEM” which allows users to look at the auctions they have created. On this screen they can add new auctions, modify previous auctions, or close bidding on an auction.

// Create a system which allows users to view all of the auctions of which they are the leading bidder.

// Create a third option on the main screen which allows administrators to modify the database as they see fit.

// Create visually appealing tables. This means making dynamic console code and it is a lot harder than it might seem at first so do not think this one is so simple.

// Create a search function that allows users to look through the database of available auctions to find those that share the specified keyword or username.

// Get creative! There are a lot of addons to this app which you could create so feel free to work with your group to come up with something not listed above!