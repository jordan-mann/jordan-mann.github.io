// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //use for loop to iterate throug numbers between 1 - 100.
    for (let i = 1; i <= 100; i++) {

    //use conditional statements to determine what message should print
    //Edge case first. Use if statement to determine if number is multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        //log message
        console.log('FizzBuzz');
    } // use else if statement to determine if number is multiple of 3
    else if (i % 3 === 0) {
        //log message
        console.log('Fizz');
    }// use else if statement to determine if number is multiple of 5
    else if (i % 5 === 0) {
        //log message
        console.log('Buzz');
    } //use else statement to print message for any number that did not meet the above qualifications
    else {
        console.log(i);
    }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}