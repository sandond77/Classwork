// Initialize Firebase (YOUR OWN APP)


  var config = {
    apiKey: "AIzaSyCHvhrZebCFMm0a2_oArMnPOrmd1YS7T0s",
    authDomain: "exercise1-4eed4.firebaseapp.com",
    databaseURL: "https://exercise1-4eed4.firebaseio.com",
    projectId: "exercise1-4eed4",
    storageBucket: "exercise1-4eed4.appspot.com",
    messagingSenderId: "173908912589"
  };

  firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

var database = firebase.database();

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.get().set({
	snapshot.val().clickCount;
})

// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
