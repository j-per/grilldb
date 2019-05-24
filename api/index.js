const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const newRecipe = require("./routes/newRecipe");
const allRecipes = require("./routes/allRecipes");
const recipeDetails = require("./routes/recipeDetails");
require("dotenv/config");

//Connect to DB
const DB_URI = process.env.MLAB_DB_CONNECTION;
mongoose.connect(DB_URI, {
  useNewUrlParser: true
});

const conn = mongoose.connection;

conn.on("error", console.error.bind(console, "connection error:"));

conn.once("open", function() {
  // Wait for the database connection to establish, then start the app.
  console.log("Connected to MLAB DB");

  app.use("/api/post", newRecipe);
  app.use("/api/allrecipes", allRecipes);
  app.use("/api/allrecipes/recipedetails", recipeDetails);

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
