const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

//set directory for views

app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    name: "Tv",
  },
  {
    id: 2,
    name: "Radio",
  },
  {
    id: 3,
    name: "Computer",
  },
  {
    id: 4,
    name: "Mobile",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.listen(3000, () => {
  console.log("App is listening to 3000");
});
