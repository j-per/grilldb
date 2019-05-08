const express = require("express");
const cors = require("cors");
const app = express();
//Time formatter
const moment = require("moment");
const mongoose = require("mongoose");
//Multer used for multipart form data primarily used for uploading files
const multer = require("multer");
//Time format
const timeFormat = moment().format("L, LTS");

//Descirbes where and how the file upload gets stored
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
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

//Mongoose model
const Recipe = require("./models/recipe");

//Connect to DB
mongoose.connect("mongodb://localhost:27017/grillDB", {
  useNewUrlParser: true
});

//What app is using
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

//Get route
app.get("/test", (req, res, next) => {
  Recipe.find()
    .select("recipeName recipeImage category hours minutes")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        recipes: docs.map(recipe => {
          return {
            recipe: recipe.recipeName,
            category: recipe.category,
            hours: recipe.hours,
            minutes: recipe.minutes,
            recipeImage: recipe.recipeImage,
            request: {
              type: "GET"
            }
          };
        })
      };
      res.status(200).json(response);
    });
});

app.post("/post", upload.single("recipeImage"), (req, res) => {
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
    message: "Handling POST request to /post",
    createdRecipe: recipe
  });
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
