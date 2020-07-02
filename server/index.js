const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../index.html')));


app.get('api/chefs', async (req, res, next) => {
  const chefs = await Chef.findAll()
  res.send({ chefs })
})

app.get('api/recipes', async (req, res, next) => {
  const chefs = await Recipe.findAll()
  res.send({ recipes })
})

app.use((err, req, res, next)=> {
  res.status(500).send({ message: err. message });
});


const PORT = process.env.PORT || 3000;

const startServer = () => new Promise((res) => {
  app.listen(PORT, () => {
      console.log(chalk.green(`Server is now listening on PORT: ${PORT}`));
      res()
  })
})

const startApp = () => {
  return seed()
    .then(startServer)
    .then(() => {
        console.log(chalk.greenBright('Server started successfully.'));
    })
    .catch((e) => {
        console.log(chalk.redBright('Failed to start application'));
        throw e;
    });
}

startApp()