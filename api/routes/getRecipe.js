const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");

//             /:userId/books/:bookId
router.get("/:id", (req, res, next) => {
  const ID = req.params.id;
  Recipe.findById(ID).then(doc => res.json(doc));
});

module.exports = router;
