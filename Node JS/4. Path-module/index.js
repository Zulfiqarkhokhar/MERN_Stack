const path = require("path");

console.log("Directory Name :", path.dirname(__filename));

console.log("File Name : ", path.basename(__filename));

console.log("File Extension :", path.extname(__filename));

const joinPath = path.join("/user", "document", "node", "project");
console.log(joinPath);
