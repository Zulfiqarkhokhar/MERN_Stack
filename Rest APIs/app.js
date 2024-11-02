const express = require("express");
const app = express();

//middleware

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
  {
    id: 4,
    title: "Book 4",
  },
  {
    id: 5,
    title: "Book 5",
  },
];

// intro route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Book Store",
  });
});

//get all books

app.get("/get", (req, res) => {
  res.json(books);
});

// get single book

app.get("/get/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((item) => item.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

// add new book

app.post("/add", (req, res) => {
  let newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };

  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New Book Added succesfully",
  });
});

// update book

app.put("/update/:id", (req, res) => {
  const currentBook = books.find((item) => item.id === parseInt(req.params.id));

  if (currentBook) {
    currentBook.title = req.body.title || currentBook.title;

    res.status(200).json({
      message: "Book Update",
      data: currentBook,
    });
  } else {
    res.status(404).json({
      message: "Book Not found",
    });
  }
});

// delete book

app.delete("/delete/:id", (req, res) => {
  const newBooks = books.filter((item) => item.id !== parseInt(req.params.id));
  books = [...newBooks];
  res.status(200).json({
    message: "Book deleted",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
