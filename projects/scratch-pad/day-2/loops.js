// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //use for loop to iterate through array
  for (let i = 0; i < array.length; i++) {
  //print values to the console
    console.log(array[i])
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //use for loop to iterate through array in reverse
  for (let i = array.length - 1; i >= 0; i--) {
  //print values to the console
  console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

 // return Object.keys(object);

  //create new array and assign it an empty array
  let array = [];
  //use for in loop to iterate through object keys
  for(var key in object) {
  //use push method to push keys into array
  array.push(key);
  }
  //return array 
  return array;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use for in loop to iterate through object keys
  for (var key in object) {
    //print keys to console
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
 // return Object.values(object);
  
 //create array variable and assign it an empty array
 let array = [];
 //use for in loop to iterate through object key/values
 for (let key in object) {
  //use push method to push values into array
  array.push(object[key]);
 }
  //return array
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // iterate through object values
  for (let key in object) {
  //print values to console
  console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
 //return Object.values(object).length;
 
 //create array variable and assign it an empty array
 let array = [];
 //use for in loop to iterate through object key/values
 for (let key in object) {
  //use push method to push values into array
  array.push(object[key]);
 }
  //return array
  return array.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

 // let array = Object.values(object);

 //create array variable and assign it to an empty array
 let array = [];

    //use for in loop to iterate through object values
    for (let key in object) {
      //use push method to push values into array
      array.push(object[key]);
    }

  for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
    }

  //use for in loop 
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
