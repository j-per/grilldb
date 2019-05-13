const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");

router.get("/", (req, res, next) => {
  Recipe.find()
    .select("recipeName recipeImage category")
    .exec()
    .then(docs => {
      const response = {
        recipes: docs.map(recipe => {
          return {
            recipeName: recipe.recipeName,
            recipeCategory: recipe.category,
            recipeImage: `http://localhost:5000/${recipe.recipeImage}`
          };
        })
      };
      res.status(200).json(response);
    });
});

module.exports = router;
