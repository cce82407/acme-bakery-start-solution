const { STRING, UUID, UUIDV4 } = require("sequelize");
const db = require("../db");

const Recipe = db.define("recipe", {
  id: {
    primaryKey: true,
    type: UUID,
    default: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Recipe;
