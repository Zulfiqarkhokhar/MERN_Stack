const lodash = require("lodash");
console.log("Hello Node");

const names = ["Zulfiqar", "Ali"];

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
