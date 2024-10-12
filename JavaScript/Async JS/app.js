// Synchronous code

// function myFunc() {
//   console.log("Inside function");
// }

// console.log("Start");
// myFunc();
// console.log("End");

//asynchronous

console.log("Start");

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);

console.log("End");

// Promise // it is promise of execution of code whatever failure or completion

// 3 states
//1-> Pending
//2-> Fullfilled/Resolved -> .then() and .finally()
//3-> Rejected -> .then() or .catch() or .finally()

function checkNumber(number) {
  return new Promise((res, rej) => {
    if (number % 2 === 0) {
      res(`${number} is an even number`);
    } else {
      rej(`${number} is an odd number`);
    }
  });
}

const numberToCheck = 8;

checkNumber(numberToCheck)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// async await

function fetchDataFromServer() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("User Data Retrieved from Server");
    }, 4000);
  });
}

async function fetchData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining task");
  } catch (error) {
    console.log(error);
  }
}

fetchData();
