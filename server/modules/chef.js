const db = require("../db");
const { STRING, UUID, UUIDV4 } = require("sequelize");

//id is not necessary because sequelize has a default serial id
const Chef = db.define("chef", {
  id: {
    primaryKey: true,
    type: UUID,
    default: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  // },
  // lastName: {
  //   type: STRING,
  //   allowNull: false,
  //   unique: true,
  // },
});

module.exports = Chef;
