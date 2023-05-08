//task 1
function sumOfDigits(number) {
  if (number === 0) {
    return 0;
  } else {
    return (number % 10) + sumOfDigits(Math.floor(number / 10));
  }
}
let myNumber = 12345;
let mySum = sumOfDigits(myNumber);
console.log(mySum); // Output: 15


//task 2
function power(x, y) {
  if (y === 0) {
    return 1;
  } else if (y % 2 === 0) {
    let result = power(x, y / 2);
    return result * result;
  } else {
    return x * power(x, y - 1);
  }
}
let myX = 2;
let myY = 5;
let myPower = power(myX, myY);
console.log(myPower); // Output: 32
