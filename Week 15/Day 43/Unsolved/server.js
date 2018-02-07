//You will edit the server.js file, the dog.handlebars file, and the index.handlebars file in an attempt to recreate the application that we demonstrated just a couple of minutes ago. Instructions on what to do are contained within each file you will have to edit.

var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
    res.render("dog",animals[0]);
  // 1. Send the dog object from the animals array to the dog.handlebars file.

});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  var pets = {
    test: []
  };

  for (var i = 0; i < animals.length; i++) {
    if (animals[i].pet) {
      pets.test.push(animals[i]);
    } 
  }

  console.log(pets);
  console.log(typeof(pets))


  // for (var i = 0; i < animals.length; i++) {
    // if (animals[i].pet) {
  res.render("index", pets);
    // }
  // }

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.

});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
    var pets = {
      test: []
    };


  for (var i = 0; i < animals.length; i++) {
    if (animals[i].pet === false) {
      pets.test.push(animals[i]);
    } 
  }

  console.log(pets);
  console.log(typeof(pets))
  res.render("index", pets);

});

app.listen(port,function(){
  console.log("App is listening on PORT", port);
});
