// task 1 
// _____________
// 1
function task1(){
function square(number) {
  return number * number;
}
let theNumber = prompt('Enter a number?');
let mySquare = square(theNumber);
alert(mySquare); 
// Output: number * number
}
//-----------------
// 2 
function task2(){
function CubeOf2Number(num1, num2) {
  return Math.pow(num1,3) + Math.pow(num2,3);
}
let num1 = prompt('Enter the first number?');
let num2 = prompt('Enter the second number?');
alert(CubeOf2Number(num1,num2));
}
//-----------------
// 3
function task3(){
function reverseNumber(number) {
  let reversed = 0;
  while (number !== 0) {
    let lastDigit = number % 10;
    reversed = (reversed * 10) + lastDigit;
    number = Math.floor(number / 10);
  }
  return reversed;
}
let myNumber = 12345;
let myReversedNumber = reverseNumber(myNumber);
alert(myReversedNumber); // Output: 54321
}
function task4 (){
function isDivisible(num){
  for(let i = 1; i <= 100; i++){
    if(i % num == 0) 
    alert(i);
  }
}
let num3 = prompt('what number u want to test if divisible?');
isDivisible(num3);
}