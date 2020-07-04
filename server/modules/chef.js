const { db } = require("../db");

//id is not necessary because sequelize has a default serial id
const Chef = db.define("chef", {
  id: {
    primaryKey: true,
    type: UUID,
    default: UUIDV4,
  },
  firstName: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  lastName: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = {
  Chef,
};
