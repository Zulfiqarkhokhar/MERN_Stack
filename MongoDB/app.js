import express from "express";
import connectDB from "./db/connectDB.js";
import { deleteDoc } from "./models/Movies.js";
const app = express();

const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);
// createDoc();
// insertManyDoc();
// allDocs();
// singleDoc();
// updateById("6729124494b730ed3ea80cf4");
deleteDoc();

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});
