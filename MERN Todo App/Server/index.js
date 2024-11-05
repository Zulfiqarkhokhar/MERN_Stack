import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/connectDB.js";
import todoModel from "./models/Todo.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/todo";

connectDB(DATABASE_URL);

app.post("/add", (req, res) => {
  const task = req.body.task;
  todoModel
    .create({
      task: task,
    })
    .then((result) => console.log(result))
    .then((err) => console.log(err));
});

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  todoModel
    .findByIdAndDelete({
      _id: id,
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log("Server is Up");
});
