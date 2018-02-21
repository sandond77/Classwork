// Create a function, called assertThrows, which takes an argument called func, and calls it as a function.

// Create another function, called multiply, which prints the result of multiply 2 and 2.

// Use assertThrows to call multiply by passing multiply in as the func parameter.

// Next, update multiply to accept two arguments, x and y, and returns the result of multiply them.

// Update assertThrows so that it can call multiply with two arguments.

// Ensure everything works by using assertThrows to print the result of multiplying two numbers.

// Next, update multiply so that it throws an error if either x or y is not a number, and returns the result otherwise.

// Finally, update assertThrows such that it prints ‘Function threw.’ to the console, and returns true.




var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  try{
    func(x, y);
  }
  catch (err) {
    threw = true;
  }


  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if ((typeof x!=="number") || (typeof y !=="number")) {
    return "You did not enter two numbers"
  }
  else 
    console.log(x * y);
};

console.log("should have no error", assertThrows(multiply, 2, 2));
console.log("error", assertThrows(multiply, "2", 2));
