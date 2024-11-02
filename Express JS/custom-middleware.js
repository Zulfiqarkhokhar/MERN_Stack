const express = require("express");

const app = express();

// logging time stamp middleware

const timeStampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(timeStampLogger);
app.get("/home", (req, res) => {
  res.send("Welcome Home");
});
app.get("/about", (req, res) => {
  res.send("Welcome About");
});

app.listen(3000, () => {
  console.log("App is listening to 3000");
});
