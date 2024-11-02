function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("You are trying to divide by Zero");
  }
  return a / b;
}

module.exports = { add, sub, divide };
