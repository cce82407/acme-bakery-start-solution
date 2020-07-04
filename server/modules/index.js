const Chef = require("./chef");
const Recipe = require("./recipe");

//has many doesn't create anything, but 'belongsTo' creates a chefId colum on the Recipe table
//The 'hasMany' completes the recipe-chef relationship, but doesn't create anything on the database, but gives
// you access to some of the sequelize magic functions/methods
//

Recipe.belongsTo(Chef);
Chef.hasMany(Recipe);

const seed = async (force = false) => {
  try {
    await db.sync({ force });
    console.log(
      chalk.green(`DB successfully connected, and synced. Force = ${force}`)
    );
  } catch (e) {
    console.log(chalk.red("Error while connecting to the database."));
    throw e;
  }
};

module.exports = {
  seed,
  Chef,
  Recipe,
};

//ALL THE MAGIC METHODS!
