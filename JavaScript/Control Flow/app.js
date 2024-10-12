// alert("Control Flow");

// ################

// ### If else ###

let a = 20;
let b = 30;

if (b > a) {
  console.log(`${b} is greater than ${a}`);
} else if (a > b) {
  console.log(`${b} is less than ${a}`);
} else {
  console.log("Error");
}

// ################

// ### Switch Statement ###

let x = 1;
let text;
switch (x) {
  case 0:
    text = "off";
    break;
  case 1:
    text = "on";
    break;
  default:
    text = "no value found";
}

console.log(text);

// ###################

// ### For Loop ###

for (let i = 0; i < 5; i++) {
  console.log("Hello Zulfiqar");
}

// ###################

// ### While Loop ###

let val = 5;

while (val >= 1) {
  console.log(val);
  val--;
}

// ###################

// ### Logical Operator ###

// -> AND (&&)
// -> OR (||)
// -> NOT (!)

// ###################

// ### Arrays ###

const myList = [true, 2, 3.14, 4, "Ali"];
console.log(myList);

console.log(myList[3]);

// ###################

// ### Objects ###

// const Obj = {key:value}

const person = {
  name: "Zulfiqar Ali",
  age: 25,
  subjects: ["Maths", "English", "Chemistry", "Physics"],
};
console.log(person);

// accessing items from object
// 1. dot notation

console.log(person.name);

// 2 with []

console.log(person["age "]);

// adding items to object

person.Id = 10;

person["Height"] = 6.5;

console.log(person);
