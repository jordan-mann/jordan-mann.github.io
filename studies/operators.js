/**
 * OPERATORS:
 * 
 * Operators are symbols used to perform a particular “operation” on single or multiple data values called “operands.” Once the operation has 
 * been performed, it produces a result.
 * 
 * An easy example is to use the mathematical operator “+”. 
 * 
 * 2 + 3;
 * 
 * In this case, + is the operator. 2 and 3 are the operands. The + performs its operation on the operands 2 and 3, which would return the result of 5.
 * 
 * 
 * Commonly used operators include:
 * Assignment operators
 * Arithmetic operators
 * Comparison operators
 * Logical operators
 * Concat operator
 * Unary operator
 * Ternary operator
 *
 */

// 1. Assignement operators //
// Assignment operators are perhaps the most fundamental operators, as we use them to assign values to variables, the building blocks of code.
// The = assignment operator is commonly used with variables to directly assign:

var name = 'Jordan';

// Other assignement operators have the affect of changing the original value of a variable and reassigning it to a new value.
// The addition assignment operator takes a value and adds it to another value, and reassigns the value of the original variable to the sum.

let m = 5;

m += 10;

console.log(m); // Expect 15 to print to the console. m has been reaasigned to the value of the original value of m (5) plus 10, which is 15.

//This operator can be used with strings as well.

let name = '';

name += 'Jordan';

console.log(name); // Expect "Jordan" to print to the console. The value of the original variable has been reassigned to add the value of the new string to it.


// The subtraction assignement operator takes a value and subtracts it from another value, and reassigns the value of the original variable to the difference.

let n = 15;

n -= 5;

console.log(n); // Expect 10 to print to the console. n has been reassigned to the value of the original value of n (15) minus 5, which is 10.


// The muliplication assignement operator takes a value and multiplies it to another value, and reassigns the value of the original variable to the product.

let o = 10;

o *= 10;

console.log(o); // Expect 100 to print to the console. o has been reassigned to the value of the original value of o (10) times 10, which is 100.


// The division assignement operator takes a value and divides it by another value, and reassigns the value of the original variable to the quotient.

let p = 50; 

p /= 10;

console.log(p); // Expect 5 to print to the console. p has be reassigned tot he value of the orginal value of p (50) divided by 10, which is 5.


// The remainder assignement operators takes a value and divides it by another value, and reassigns the vlaue of the original variable to the remainder.

let q = 50;

q %= 5;

console.log(q); // Expect 0 to print to the console. q has been reassigned to the remainder of dividing the original value of q by 5. It is 0, as there is no remainder.

let r = 50;

r %= 3;

console.log(r); // Expect 2 to print to the console. r has been reassigned to the remainder of dividing the original value of r by 3. The remainder of 50/3 is 2, and so r = 2.


// The exponentiation assignement operators takes a value and reassigns it to the value of raising it to the power of the value to the right of the operand.

let s = 5;

s **= 3;

console.log(s); //Expect 125 to print to the console. s has been reassigned to the original value of s (5) to the power of 3, which is 125.


// 2. Arithmetic operators //
// Arithemtic operators perform basic math operations on number operands. Here are is a list of arithmetic operators:

// Addition: +;  
// Subtraction: -;  
// Multiplication: *;
// Division: /;
// Remainder: %;
// Exponentiation: **; // x ** y = x to the power of y.

{
let x = 10;
let y = 2;
}

// addition
console.log('x + y = ', x + y);  // 12

// subtraction
console.log('x - y = ', x - y);  // 8

// multiplication
console.log('x * y = ', x * y);  // 20

// division
console.log('x / y = ', x / y);  // 5

// remainder
console.log('x % y = ', x % y);   // 0

// increment
console.log('++x = ', ++x); // x is now 11
console.log('x = ', x);     // 11

// decrement
console.log('--x = ', --x); // x is now 10
console.log('x = ', x);     // 10

//exponentiation
console.log('x ** y =', x ** y); // 10 to the power of 2 = 100



// 3. Comparison operators //
// Comparison operators are used to compare values and return a boolean. Here are a list of comparison operators:

/*
Strictly equal: ===; this compares two operands to determine if they are the same and of the same value type

Equal to: ==; this compare two operands to determine if they are the same, but they don’t need to by the same value type.

Greater than or Less than: > , <; these compare two operands to determine if one is greater than or less then the other. 

Greater than or equal to and Less then or equal to: >= , <=; these compare two operands to determine if one is greater than or equal to, or less then or equal to the other.

Not equal to: !=; this compares two operands and returns true is they are not equal

Strictly not equal to: !===; this compares two operands and returns true if they are not equal in value types are not equal, even if the values are equal.
*/

var a = 11;
var b = 3;

if (a > b) {
  console.log('a is greater than b') //expect 'a is great than b'
};
//////////////////////////////////////

var val1 = 2;
var val2 = '2';

if (val1 === val2) {
  console.log('strictly equal') //nothing will print. Since this is false, the code will continue
} else if (val1 == val2) {
  console.log('equal, but not strictly'); //expect 'equal, but not strictly'
};
////////////////////////////////////

var num1 = 4;
var num2 = 5;

if (num1 !== num2) {
  console.log('Don\'t go changing my numbers.'); //expect 'Don't go changing my numbers.' because
  //num1 and num2 are not strictly equal.
};
///////////////////////////////////

var x = 10; 
var y = 10;
var z = 12;

if (z >= x && x <= y) {
    console.log(true); // expect true. Z (12) is greater than (or equal to) x (10) && x (10) is less than or equal to y (10).
}



// 4. Logical operators //
//Logical operators are used to logically compare values and return a boolean value.
/*
Logical AND: &&; returns true if both operands are true, else returns false.

Logical OR: ||; returns true if one or the other operand is true, returns false if both are false.

Logical NOT: !; returns true if operand is false; returns false if operand is true.
*/

console.log(true && true);  // expect true, because both operand 1 AND operand 2 are true

console.log(true && false); //expect false, because both operand 1 AND operand 2 are not true

console.log(true || false); //expect true because either operand 1 OR operand 2 are true

console.log(false || false); //expect false because neither operand 1 OR operand 2 are true

console.log(!false); //expect true, because true IS NOT  false



// 5.  Concat operator //
// The concat operator (+) takes two strings and returns the value of both strings concatenated (joined) together.


var nameFirst = 'Jordan';

var nameLast = 'Mann';

var nameFull = namefirst +  nameLast;

console.log(nameFull); //expect ‘JordanMann’. To add space in between, concatenate each name with a space in between: nameFirst + ‘ ’ + nameLast;



// 6.  Unary operators //
/*
Unary Operators perform an operation on a single operand to return a value.
Unary Plus: +x; //converts a value into a number
Unary Minus: -x; //converts a value into a number and negates it
Increment : ++; // increments by 1
Decrement: - -; //decrements by 1

With Unary conversion operators, booleans convert to number values. true converts to 1, and false to 0.
*/

var x = '15';
var y = +x;
console.log(y); //expect 15. converts x to a value of a number and assigns it to y

var t = true;
var f = false;
console.log(-t); //the unary - operator converts true to 1 and negates it
console.log(+f); //the unary + operator converts false to 0


console.log('x++ = ', ++x); // x is now 16

console.log('--x = ', --x); // x is now 15



// 5.  Ternary operators //
/* 
The ternary operator takes 3 operands, making it unique among operators. The operands are a condition, followed by a question mark, 
then an expression to execute if the condition is true, followed by a colon and finally the expression to execute if the condition is false. 
The ternary operator can be used in place of an if-else statement.

condition ? expression (if true) : expression (if false);
*/

var name = 'Jordan Mann';

var identity = name === 'Peter Griffin' ? 'My name is Peter Griffin' : 'I\'m not Peter Griffin'

console.log(identity); // expect ‘I’m not Peter Griffin’
