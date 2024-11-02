const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "Data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data Folder Created");
}
const filePath = path.join(dataFolder, "example.txt");

//synchronous way of creating file

fs.writeFileSync(filePath, "This is Node js Practise file");

console.log("File Created successfully");

// reading file text

const readFileData = fs.readFileSync(filePath, "utf-8");

console.log("File Data :", readFileData);

// appending new line to file

fs.appendFileSync(filePath, "\nthis is new line data");

console.log("New Line Added");

// asynchronous way of creating file

const asyncFilePath = path.join(dataFolder, "asyn-example.txt");

fs.writeFile(asyncFilePath, "hello Async node js", (err) => {
  if (err) throw err;
  console.log("Async file created");
  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
