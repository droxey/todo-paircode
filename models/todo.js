module.exports = function(sequelize, DataTypes) {
  var TodoItem = sequelize.define("TodoItem", {
    item_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    is_complete: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  return TodoItem;
};
