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

  app.post("/todo/new", function(req, res) {
    db.TodoItem.create({
      item_text: req.body.item_text
    }).then(function(result) {
      // `results` here would be the newly created chirp
      res.json(result);
    });
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/todo/:id", function(req, res) {
    db.todoItem.update({
      text: req.body.item_text,
      complete: req.body.is_complete
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    })
    .catch(function(err) {
     // Whenever a validation or flag fails, an error is thrown
     // We can "catch" the error to prevent it from being "thrown", which could crash our node app
     res.json(err);
   });
 });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/todo/:id", function(req, res) {
    db.todoItem.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
    })
};
