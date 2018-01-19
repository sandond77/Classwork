// In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.

// The first constructor function is called “Student” and has the following properties within it...

// Name of the student
// Favorite subject
// Current GPA
// The second constructor function is called “Class” and has the following properties within it...

// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number
// The Student constructor function from above which adds a new student to the class
// BONUS: Make it so that that your application can take in user input to add new classes and new students to those classes.
// constructor function for creating student objects
var Student = function(name, favoriteSub, gpa) {
  this.name = name;
  this.favoriteSub = favoriteSub;
  this.gpa = gpa;
};
// exporting our Student constructor
module.exports = Student;