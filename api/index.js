const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const newRecipe = require("./routes/newRecipe");
const getRecipes = require("./routes/getRecipes");
require("dotenv/config");

//Connect to DB
<<<<<<< HEAD
const DB_URI = process.env.MLAB_DB_CONNECTION;
console.log(DB_URI);
=======
const DB_URI = "mongodb://<username>:<password>@ds239206.mlab.com:39206/grilldb";
>>>>>>> 49485e30e745294c85eb800e2254392a39d92bd1
const DB_URI_LOCAL = "mongodb://localhost:27017/grillDB";
mongoose.connect(DB_URI_LOCAL, {
  useNewUrlParser: true
});

mongoose.connect(DB_URI_LOCAL);

const conn = mongoose.connection;

conn.on("error", console.error.bind(console, "connection error:"));

conn.once("open", function() {
  // Wait for the database connection to establish, then start the app.
  console.log("Connected to MLAB DB");

  app.use("/post", newRecipe);
  app.use("/recentRecipes", getRecipes);

  //Error handling for routes not declared
  app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });

  //Error handling for everything else
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
});

//What app is using
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
