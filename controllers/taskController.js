// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all TodoItems
  app.get("/", function(req, res) {
    db.TodoItem.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a chirp
  app.post("/todo/new", function(req, res) {
    db.TodoItem.create({
      item_text: req.body.item_text
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.json(results);
    });
  });  

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/todo/todos", function(req, res) {

  });
  
  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/todo/:id", function(req, res) {

  });


};