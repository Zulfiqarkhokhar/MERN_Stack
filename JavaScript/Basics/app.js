console.log("Hello Zulfiqar");
//alert("Hello Zulfiqar");

// comments with double slash
// clg console.log
// log also give console.log

//################

// ### varriables ###

// (Reseved Keyword) (varriable name) (type of Value)

// declair variable and Assign value

let name = "Zulfiqar Ali";

console.log(name);

var age = 12;

console.log(age);

const PI = 3.14; // cannot be changed

console.log(PI);

// ################

// ### Primitive types ###

// 1. Number

let num = 10;
console.log(typeof num);

// 2. Boolean

let isTrue = true; // or false

console.log(typeof isTrue);

// falsy value
//-> false
//-> null
//-> undefined
//-> 0
//-> -0
//-> NaN
//-> '', "", ``, (empty quotes)

// ################

// ### Comparison Operator

// 1. Relational Operator

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

// 2. Equality Operator

// === strict equality (Type + Value)

console.log(10 === 10); // true
console.log(10 === "10"); // false

// !== strict non-equality (Type + Value)

console.log(10 !== 10); // false

// == lose equality (value)

console.log(10 == 10); // true
console.log(10 == "10"); // true because of value

// != non-equality (value)

console.log(10 != 10); // false

// ##################
// ### Strings ###

let firstName = "Zulfiqar ";
let lastName = "Ali";
let fullName = firstName + lastName;
console.log(fullName);

// concatenation

let str = firstName.concat(lastName);
console.log(str);

// append

str += " Khokhar";
console.log(str);

// length

console.log(str.length);

// split

console.log(lastName.split(""));

// join

console.log(lastName.split("").join(""));

// includes

console.log(firstName.includes("lfi"));

// trim

let str2 = "  ali khan   ";
console.log(str2.trim());

// back tiks ``

console.log(`${firstName} ${lastName} boy`);

// #######################

// ### Type Conversion ###

let money = "100";

// convert string to number

//money = parseInt(money);
//money = +money;
money = Number(money);

console.log(money);
console.log(typeof money);

// convert number to string

let num2 = 50;

//num2 = num2.toString();
num2 = String(num2);

console.log(num2);
console.log(typeof num2);

// convert string to decimal

let num3 = "3.332";

num3 = parseFloat(num3);

console.log(num3);
console.log(typeof num3);
