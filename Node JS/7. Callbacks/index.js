// simple call back

function person(name, callbackfn) {
  console.log(`hello ${name}`);
  callbackfn();
}

function address() {
  console.log("Address");
}

person("Zulfiqar", address);

// node js point of view

const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file");
  } else {
    console.log(data);
  }
});
