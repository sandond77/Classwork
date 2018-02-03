// Dependencies
var express = require("express");
 
// Create express app instance.
var app = express();
var PORT = process.env.PORT || 3000;
// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:int1/:int2", function(req, res) {
  var operation = req.params.operation;
  var int1 = parseInt(req.params.int1);
  var int2 = parseInt(req.params.int2);
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
    case "+":
      // Add your logic here. Pun intended.
      result = int1 + int2;
      break;

    case "subtract":
    case "-":
      result = int1 - int2;
      break;

    case "multiply":
    case "*":

      result = int1 * int2;
      break;

    case "divide":
    case "/":
      result = int1 / int2;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send("<h1>" + int1 + " " + operation + " " + int2 + " = " + result + "</h1>");

});

// Initiate the listener.
app.listen(PORT, function(){
  console.log("App is listening on PORT", PORT);
});
