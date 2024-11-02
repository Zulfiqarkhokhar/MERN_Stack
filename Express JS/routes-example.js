const express = require("express");

const app = express();

// root route

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// get all products

app.get("/products", (req, res) => {
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
      name: "MP3",
    },
    {
      id: 4,
      name: "Mobile",
    },
  ];
  res.json(products);
});

// get single product

app.get("/products/:id", (req, res) => {
  const productsId = parseInt(req.params.id);
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
      name: "MP3",
    },
    {
      id: 4,
      name: "Mobile",
    },
  ];

  const getSingleProduct = products.find(
    (product) => product.id === productsId
  );
  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("Product is not found");
  }
});

app.listen(3000, () => {
  console.log("App is listening to 3000");
});
