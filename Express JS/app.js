const express = require("express");
const students = require("./routes/student");
const teachers = require("./routes/teacher");
const app = express();

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
