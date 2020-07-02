const { db } = require('../db')

const Chef = db.define('chef',{
    name: {
        type: STRING,
        allowNull: false,
        unique: true
    }

})

module.exports = {
    Chef
}