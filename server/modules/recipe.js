const { STRING, UUID, UUIDV4 } = require('sequelize')
const { db } = require('../db')

const Recipe = db.define('recipe',{
    name: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    id: {
        primaryKey: true,
        type: UUID,
        default: UUIDV4
    }

})

module.exports = {
    Recipe
}