console.log("ES6");

// spread // take iterable like array and expand to individual elements

// with function

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const nums = [1, 2, 3, 4];

giveMe4(...nums);

// with array

const evens = [2, 4, 6, 8, 10];
const odd = [1, 3, 5, 7, 9];

const nums1 = [...odd, ...evens];
console.log(nums1);

// with objects

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

//################

// Rest operator // accept indefinite of elements as an array

function showNums(ten, ...nums) {
  console.log(ten);
  console.log(nums);
}

showNums(10, 2, 3, 4, 5, 1);

// destructuring -> unpack value from data stractures (array or object) into seperate varriables

const colors = ["red", "orange", "green"];

const [red, orange, green] = colors;

console.log(red);
console.log(orange);
console.log(green);

const obj4 = {
  name: "Waheed",
  age: 52,
};

const { name, age } = obj4;

console.log(name);
console.log(age);

const { name: nalo, age: umir } = obj4;

console.log(nalo);
console.log(umir);

//#################

// ternary operator

function passwordCheck(ps) {
  return ps === 8 ? "Strong Password" : "Weak Password";
}

const ps = "KingKhan";
let lenOfPs = ps.length;
console.log(passwordCheck(lenOfPs));

// #####################

// for in loop

// object

for (let key in obj4) {
  console.log(obj4[key]);
}

// array

const arr = ["red", "Orange", "purple"];

for (let index in arr) {
  console.log(`${index} -> ${arr[index]}`);
}

// for of loop

for (let color of arr) {
  console.log(color);
}

// forEach() method // modify array or not give new array

const words = ["hello", "bird", "table", "football", "cat"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

// map() method // gives new array

const numbers = [1, 2, 3, 4, 5];

let double = numbers.map((num) => num * 2);

console.log(double);

// filter() method // give new array of elements of passing condition

const grades = [3.12, 3.5, 3.2, 3.1, 3.0, 2.5];

let results = grades.filter((grade) => grade >= 3.2);

console.log(results);

// find() method // find first element which satisfy condition

const myArr = [
  { name: "Ali", age: 20 },
  { name: "Hussain", age: 40 },
  { name: "Abbass", age: 30 },
  { name: "Momin", age: 40 },
];

const res = myArr.find((person) => person.age === 40);
console.log(res);

// reduce() method // applied on each element and calculate result into single value and does not change main array

const myNums = [1, 2, 3, 4, 5];

const sum = myNums.reduce((prev, cur) => {
  console.log(`Previous : ${prev}`);
  console.log(`Current : ${cur}`);

  return prev + cur;
}, 0);

console.log(sum);
