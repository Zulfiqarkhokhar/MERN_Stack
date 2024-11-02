const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }
  const modifyFile = data.toUpperCase();
  fs.writeFile("output.txt", modifyFile, (err) => {
    if (err) {
      console.error("Error writing file");
      return;
    }
    console.log("data written to new file");

    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file");
        return;
      }
      console.log(data);
    });
  });
});
