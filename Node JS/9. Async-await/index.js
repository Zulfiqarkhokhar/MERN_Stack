function delayfn(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function delayedGreet(name) {
  await delayfn(2000);
  console.log(name);
}

delayedGreet("Zulfiqar Ali");

async function division(num1, num2) {
  try {
    if (num2 === 0) {
      throw new error("Can not divide by 0");
    }
    return num1 / num2;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function mainfn() {
  console.log(await division(10, 5));
  console.log(await division(10, 0));
}

mainfn();
