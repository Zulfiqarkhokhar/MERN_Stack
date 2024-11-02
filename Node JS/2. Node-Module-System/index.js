// module.export --> export
// require --> import

const firstModule = require("./first-module");

console.log(firstModule.add(2, 3));
console.log(firstModule.sub(2, 3));

try {
  firstModule.divide(10, 10);
} catch (error) {
  console.log(error);
}
