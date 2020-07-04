const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const seed = reequire("./modules/index");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "../index.html"))
);

app.get("api/chefs", async (req, res, next) => {
  const chefs = await Chef.findAll({
    include: {
      model: recipe,
    },
  });
  res.send({ chefs });
});
//eager loading: finding all of the chefs and all of the recipes that belong

app.get("api/recipes", async (req, res, next) => {
  const chefs = await Recipe.findAll();
  res.send({ recipes });
});

app.post("api/recipes", async (req, res, next) => {
  const { name, chefId } = req.body;
  const recipe = await Recipe.create({ name: name, chefId: chefId });
});
//because of the relationship that we set up, sequelize creates a column on recipes called "chefId." This is how we will
//know what chef belogns
//when using the axios.post on the front end, you will set up this object that will be sent where the
//chefId will be created. Just make sure you are using the same key name on the front and back

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 3000;

const startServer = () =>
  new Promise((res) => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server is now listening on PORT: ${PORT}`));
      res();
    });
  });

const startApp = () => {
  return seed()
    .then(startServer)
    .then(() => {
      console.log(chalk.greenBright("Server started successfully."));
    })
    .catch((e) => {
      console.log(chalk.redBright("Failed to start application"));
      throw e;
    });
};

startApp();
