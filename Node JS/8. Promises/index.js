function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

console.log("Promise Lecture start");

delay(2000).then(() => console.log("after two second promise resolved"));

console.log("end");

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot Perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divide(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
