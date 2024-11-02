const express = require("express");

const app = express();

const myFirstMiddleware = (req, res, next) => {
  console.log("This first middle ware will run on every request");
  next();
};

app.use(myFirstMiddleware);

app.get("/home", (req, res) => {
  res.send("Welcome Home");
});
app.get("/about", (req, res) => {
  res.send("Welcome About");
});
app.listen(3000, () => {
  console.log("App is listening to 3000");
});
