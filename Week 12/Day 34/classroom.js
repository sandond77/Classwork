var Student = require("./student.js");
// var inquirer = require("inquirer");
var classStudents = [];


function Classroom(classStudents, size, professor, room){
	this.students = [];
	this.professor = professor;
	this.room = room;

	this.addStudent =  function(name,subject,gpa){
		this.students.push(new Student(name,subject,gpa));
	}

	this.studentCount = this.students.length 
}

// var entire = EntireClass(classStudents, 5, "me", 111)

module.exports = Classroom;