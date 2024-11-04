import mongoose from "mongoose";

// define schema

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  Comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// creating model

const movieModel = mongoose.model("Movie", movieSchema);

// inserting one doc

// const createDoc = async () => {
//   try {
//     // creating new Doc
//     const m1 = new movieModel({
//       name: "Jigsaw",
//       ratings: 5,
//       money: 50000,
//       genre: ["Brutal", "Thriller"],
//       isActive: true,
//       Comments: [{ value: "That was an awesome Movie." }],
//     });
//     const result = await m1.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// inserting many docs

// const insertManyDoc = async () => {
//   try {
//     // creating new Doc
//     const m1 = new movieModel({
//       name: "Jigsaw",
//       ratings: 5,
//       money: 50000,
//       genre: ["Brutal", "Thriller"],
//       isActive: true,
//       Comments: [{ value: "That was an awesome Movie." }],
//     });
//     const m2 = new movieModel({
//       name: "Hills Have Eyes",
//       ratings: 4,
//       money: 40000,
//       genre: ["Brutal", "Thriller"],
//       isActive: true,
//       Comments: [{ value: "That is an Thriller movie." }],
//     });
//     const m3 = new movieModel({
//       name: "Titanic",
//       ratings: 3,
//       money: 100000,
//       genre: ["Drama", "Romance"],
//       isActive: false,
//       Comments: [{ value: "That was a fantastic Movie." }],
//     });
//     const m4 = new movieModel({
//       name: "DDLJ",
//       ratings: 2,
//       money: 20000,
//       genre: ["Comedy", "Action"],
//       isActive: true,
//       Comments: [{ value: "That was interesting Movie." }],
//     });
//     const m5 = new movieModel({
//       name: "Gajni",
//       ratings: 1,
//       money: 10000,
//       genre: ["Fiction", "Love"],
//       isActive: false,
//       Comments: [{ value: "That was an amazing Movie." }],
//     });
//     const result = await movieModel.insertMany([m1, m2, m3, m4, m5]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// get all docs

// const allDocs = async () => {
//   try {
//     const result = await movieModel.find(); // all data
//     console.log(result);

//     //Iterating
//     result.forEach((item) => {
//       console.log(item.name);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// get single doc

// const singleDoc = async () => {
//   try {
//     const result = await movieModel.findById("6729124494b730ed3ea80cee"); // all data
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// update by id

// const updateById = async (id) => {
//   try {
//     const result = await movieModel.updateOne(
//       { _id: id },
//       { name: "Tere Naam" }
//     );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// delete

const deleteDoc = async () => {
  try {
    const result = await movieModel.deleteOne({ name: "Tere Naam" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { deleteDoc };
