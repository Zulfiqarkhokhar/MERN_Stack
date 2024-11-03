const mongoose = require("mongoose");

// making mongoos connection

async function connectToMongoDb() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://zulfiqarkhokhar111:12345@cluster0.txgtv47.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => console.log("Database connected"))
      .catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }
}

connectToMongoDb();

// creating user Schema

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// creating user model

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // creating new document

    const newUser = await User.create({
      name: "Zulfiqar",
      email: "zulfiqarkhokhar111@gmail.com",
      age: "25",
      isActive: true,
      tags: ["developer", "designer", "teacher"],
    });

    console.log("User Created");
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
