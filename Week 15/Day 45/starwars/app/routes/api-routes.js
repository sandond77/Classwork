// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../model/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the character here to run our searches)
      Character.searchCharacter(req.params.characters, function(data) {
        res.json(data);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the character here to run our searches)
      character.allCharacters(function(data) {
        res.json(data);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var body = req.body;

    // Then send it to the character to "save" into the DB.
    character.addCharacter(body, function(data) {
      console.log(data);
    });

  });
};
