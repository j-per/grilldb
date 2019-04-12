const express = require("express");
const cors = require("cors");
const app = express();
const moment = require("moment");
const mongoose = require("mongoose");
const Recipe = require("./models/recipe");
const timeFormat = moment().format("L, LTS");

app.use(cors());
app.use(express.json());

//Connect to DB
mongoose.connect("mongodb://localhost:27017/grillDB", {
  useNewUrlParser: true
});

//Get route
app.get("/test", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/post", (req, res) => {
  const recipe = new Recipe({
    _id: new mongoose.Types.ObjectId(),
    recipeName: req.body.recipeName,
    category: req.body.category,
    grillType: req.body.grillType,
    hours: req.body.hours,
    minutes: req.body.minutes,
    instructions: req.body.instructions
  });
  recipe
    .save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST request to /post",
    createdRecipe: recipe
  });
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
