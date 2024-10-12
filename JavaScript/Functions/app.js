// alert("Functions");

function greeting() {
  console.log("Hello From Function");
}

greeting();

// parametarize function

function add(a, b) {
  console.log(a + b);
}

add(2, 3);

// parametarize and return

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

// function expression

const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(10, 2));

// callback function// passing function as argument to other function

function showName(fn) {
  let name = "Zulfiqar";
  fn(name);
}

showName(function (name) {
  console.log(name);
});

const person = {
  name: "Zulfiqar Ali",
  age: 23,
  sayHello: function () {
    console.log("Hello");
  },
};

person.sayHello();

// JSON stringify and parse

const jsonFormat = JSON.stringify(person); // convert object to json format
console.log(jsonFormat);
console.log(JSON.parse(jsonFormat));

// Date

const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.toDateString());

// setInterval

// setInterval(function () {
//   console.log("setInterval in every 2 second");
// }, 2000);

// setTimeout

setTimeout(() => {
  console.log("This is setTimeout will run code in 3 second");
}, 3000);

//#######################

// arrow function

const greet = (name) => `hello ${name}`;

console.log(greet("Zulfiqar"));

// enhanced object literal
// if key and value same remove one
const obj = (name, age, email) => {
  return {
    name,
    age,
    email,
  };
};

console.log(obj("Zulfiqar Ali", 23, "zulfiqarkhokhar222@gmail.com"));

// default argument

function generateNums(flag = false) {
  if (flag) {
    for (let i = 0; i < 5; i++) {
      console.log(`Count : ${i}`);
    }
  }
}
generateNums(true);
