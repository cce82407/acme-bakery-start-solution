const express = require('express')
const app = express()
const path = require('path')
const db = require('./db')
const volleyball = require('volleyball')
const { Recipe, Chef } = db.models

app.use(express.json())

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/assets', express.static(path.join(__dirname, '../assets')))

app.use(volleyball)
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')))

// get all my chefs
app.get('/api/chefs', (req, res, next) => {
  Chef.findAll()
    .then(chefs => res.send(chefs))
    .catch(next)
})

// get a single chef
app.get('/api/chefs/:id', (req, res, next) => {
  Chef.findByPk(req.params.id, {
    include: Recipe,
  })
    .then(chef => res.send(chef))
    .catch(next)
})

// create a chef
app.post('/api/chefs', (req, res, next) => {
  Chef.create(req.body)
    .then(chef => res.status(201).send(chef))
    .catch(next)
})

app.put('/api/chefs/:id', (req, res, next) => {
  Chef.findByPk(req.params.id)
    .then(chef => chef.update({
      name: req.body.name
    }))
    .then(chef => res.send(chef))
    .catch(next)
})

app.post('/api/recipes', (req, res, next) => {
  Recipe.create(req.body)
    .then(recipe => res.status(201).send(recipe))
    .catch(next)
})

app.get('/api/recipes', (req, res, next) => {
  Recipe.findAll()
    .then(recipes => res.send(recipes))
    .catch(next)
})

app.delete('/api/recipes/:id', async (req, res, next) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id)
    await recipe.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 3000

db.sync()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`))
  })
