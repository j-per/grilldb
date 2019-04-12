const express = require("express");
const cors = require("cors");
const app = express();
const moment = require("moment");
const timeFormat = moment().format("L, LTS");

app.use(cors());
app.use(express.json());

//Sends all data from DB to counslor_backend
app.get("/test", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/post", (req, res) => {
  const data = {
    item: req.body.recipeName.toString()
  };
  res.json(data);
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
