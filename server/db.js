const Sequelize = require('sequelize')
const { UUID, UUIDV4, STRING } = Sequelize
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db')

const Chef = conn.define('chef', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true
  }
})

const Recipe = conn.define('recipe', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false
  },
  chefId: {
    type: UUID,
    allowNull: false
  }
})

Recipe.belongsTo(Chef)
Chef.hasMany(Recipe)


const sync = async () => {
  await conn.sync({ force: true })
  const [moe, lucy, larry] = await Promise.all([
    Chef.create({ name: 'moe' }),
    Chef.create({ name: 'lucy' }),
    Chef.create({ name: 'larry' }),
    Chef.create({ name: 'ethyl' })
  ])

  const [lemonCookies, mouseCake, linzerTart] = await Promise.all([
    Recipe.create({ name: 'Lemon Cookies', chefId: lucy.id }),
    Recipe.create({ name: 'Mouse Cake', chefId: moe.id }),
    Recipe.create({ name: 'Linzer Tart', chefId: lucy.id }),
  ])

  console.log(lemonCookies.get())
}


module.exports = {
  sync,
  models: {
    Chef,
    Recipe
  }
}
