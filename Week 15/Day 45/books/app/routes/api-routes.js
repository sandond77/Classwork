// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
 

// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll().then(function(results){
      return res.json(results);
    })
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    var searchTerm = req.params.book;
    Book.findOne({
      where: {
        title: searchTerm
      }
    }).then(function(results){
      return res.json(results);
    })
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    var searchTerm = req.params.genre;
    Book.findOne({
      where: {
        genre: searchTerm
      }
    }).then(function(results){
      return res.json(results);
    })
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    var searchTerm = req.params.author;
    Book.findOne({
      where: {
        author: searchTerm
      }
    }).then(function(results){
      return res.json(results);
    })
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    Book.findAll({
      where: {
       pages: {
        $gt: 150
        }
      }
    }).then(function(results){
      return res.json(results)
    })
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where: {
       pages: {
        $lte: 150
        }
      }
    }).then(function(results){
      return res.json(results)
    })
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    var newbook = req.body;
    // var bookTitle = req.body.title;
    var bookTitle = newbook.title.replace(/\s+/g, "").toLowerCase();

    Book.create({
      title: bookTitle,
      author: newbook.author,
      genre: newbook.genre,
      pages: newbook.pages
    })
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    Book.destroy({
      where: {
        title: req.body.name
      }
    })
  });
};
