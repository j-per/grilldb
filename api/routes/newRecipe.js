const express = require("express");
const router = express.Router();

const multer = require("multer");
const mongoose = require("mongoose");
const Recipe = require("../models/recipe");

//Descirbes where and how the file upload gets stored
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

//Filter that only allows jpeg and png files to be uploaded
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Applies filters for file uploads
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
});

//Route
router.post("/", upload.single("recipeImage"), (req, res) => {
  console.log(req.body);
  const recipe = new Recipe({
    _id: new mongoose.Types.ObjectId(),
    recipeName: req.body.recipeName,
    category: req.body.category,
    grillType: req.body.grillType,
    hours: req.body.hours,
    minutes: req.body.minutes,
    instructions: req.body.instructions,
    recipeImage: req.file.path
  });
  recipe
    .save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
  res.status(201).json({
    success: true,
    createdRecipe: recipe
  });
});

module.exports = router;
