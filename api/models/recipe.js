const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  recipeName: String,
  category: String,
  grillType: String,
  hours: Number,
  minutes: Number,
  instructions: String,
  recipeImage: { type: String, required: true }
});

module.exports = mongoose.model("Recipe", recipeSchema);
