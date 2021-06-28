console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
// ??? Don't know if this one needs any fixing.
console.log('1. Test - should say "Hello World!":', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('2: Should show "Hello, (name)!:',helloName('Garrett'));

// 3. Function to add two numbers together & return the result
let numberOne = 5;
let numberTwo = 7;

function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(`3: Should show the result of adding two numbers, ${numberOne} and ${numberTwo}:`, addNumbers(numberOne, numberTwo));

// 4. Function to multiply three numbers & return the result
// I know re-using variables from different questions might not be best practice, but with the current scope I am going to save time and re-use.
let numberThree = 10;

function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log(`4: Should show the result of multiplying the three numbers together, ${numberOne}, ${numberTwo}, and ${numberThree}:`,
  multiplyThree(numberOne, numberTwo, numberThree));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
console.log('5:');
function isPositive( number ) {
  return (number > 0 ? true : false)
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let testArray = [1, 4, 2, 9, 5]

function getLast( array ) {
  return array[array.length-1];
}
console.log(`6: Should show ${testArray[testArray.length - 1]}:`,getLast(testArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){

}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
