const express = require("express");

const app = express();

app.get("/product", (req, res) => {
  const { category, id } = req.query;

  res.send(`Product category is ${category} & Id is ${id}`);
});

app.listen(3000, () => {
  console.log("App is listening to 3000");
});
