// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:
var inquirer = require('inquirer');
//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
inquirer.prompt([
	{ type: "input",
	message: "Who Am I?",
	name: "User"
	},
	{ type: "password",
	message: "Create a password",
	name: "Password"
	},
	{ type: "list",
	message: "Choose your age group",
	choices: ["Under 18", "Between 18 - 30", "Over 30"],
	name: "Age Group"
	},
	{ type: "checkbox",
	message: "Gender",
	choices: ["Male","Female"],
	name: "Gender"
	},
	{ type: "confirm",
	message: "Is all of the above correct?",
	name: "Confirmation",
	default: true
	}
]).then(function (response){
	console.log("Congrats you have wasted your time with my survey")
})