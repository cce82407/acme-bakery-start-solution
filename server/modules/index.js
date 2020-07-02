const Chef = require('./chef')
const Recipe = require('./recipe')

Recipe.belongsTo(Chef)
Chef.hasMany(Recipe)

const seed = async (force = false)=> {
    try {
      await db.sync({ force })
      console.log(chalk.green(`DB successfully connected, and synced. Force = ${force}`))
    }
    catch (e) {
      console.log(chalk.red('Error while connecting to the database.'))
      throw e
    }
  };
  
module.exports = {
    seed,
    Chef,
    Recipe,
}