// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use if statement and Array.isArray() method to test if value is an array
    if (Array.isArray(value)) {
        //return true
        return true;
    }
        //otherwise return false
        return false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
     //test to determine if value is null
     if (value === null) {
        //return false
        return false;
    }
    //test to determine of value is not an array
    if (Array.isArray(value)) {
        //return false
        return false;
    }
    //test to determine if value is a date
    if (value instanceof Date) {
        //return false
        return false
    }
    //test and return if object is object meant to hold collection
    return typeof value === 'object';
 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //test if value is null
    if(value === null) {
        //if null, return false
        return false;
    } //test if value is date 
    if (value instanceof Date) {
        //if date, return false
        return false
    } //return true if value is array or object
    return (Array.isArray(value) || typeof value === 'object');

    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //use if statement to test if value is string
    if (typeof value === 'string'){
        //return 'string'
        return 'string';
    //use else if statement to test if value is an array
    }else if (Array.isArray(value)) {
        //return 'array'
        return 'array';
    //use else if statement to test if value is an object, and not an array, null, or date
    }else if (typeof value === 'object' && !Array.isArray(value) && value !== null && !value instanceof Date) {
        //return 'object'
        return 'object';
    //use else if statement to test if value is undefined
    }else if (typeof value === 'undefined') {
        //return 'undefined'
        return 'undefined';
    //use else if statement to test if value is a number
    }else if (typeof value === 'number') {
        //return 'number'
        return 'number';
    //use else if statement to test if value is a boolean
    }else if (typeof value === 'boolean') {
        //return 'boolean'
        return 'boolean';
    //use else if statement to test if value is null
    }else if (value === null) {
        //return 'null'
        return 'null';
    //use else if statement to test if value is a function
    }else if (typeof value === 'function') {
        //return 'function'
        return 'function';
    //use else if statement to test if value is a date
    }else if (value instanceof Date) {
        //return 'date'
        return 'date';
    }

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
