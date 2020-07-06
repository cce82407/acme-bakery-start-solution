const Chef = require("./chef");
const Recipe = require("./recipe");
const db = require("../db");

Recipe.belongsTo(Chef);
Chef.hasMany(Recipe);

module.exports = {
  Chef,
  Recipe,
};

//ALL THE MAGIC METHODS!
