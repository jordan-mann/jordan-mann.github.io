// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { includes } = require("lodash");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//create function expression _.identity that takes a value
_.identity = function(value) {
    //the function returns the value unchanged
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//create a function expression _.typOf that takes a value
_.typeOf = function(value) {
    //test if value is a string
    if (typeof value === 'string') {
        //return 'string'
        return 'string';
        //else test if value is an array
    }else if (Array.isArray(value)) {
        //return 'array'
        return 'array';
        //else test if value is an object use as a collection
    }else if (typeof value === 'object' && !(Array.isArray(value)) && value !== null && !(value instanceof Date)) {
        //return 'object'
        return 'object';
        //else test if value is undefined
    }else if (typeof value === 'undefined') {
        //return 'undefined'
        return 'undefined';
        //else test if value is a number
    }else if (typeof value === 'number') {
        //return 'number'
        return 'number';
        //else if value is a boolean
    }else if (typeof value === 'boolean') {
        //return 'boolean'
        return 'boolean';
        //else test if value is null
    }else if (value === null) {
        //return 'null'
        return 'null';
        //else test if value is a function
    }else if (typeof value === 'function') {
        return 'function';
    }
}



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//create a function express _.first that takes an array and a number
_.first = function(array, number) {
    //Create newArray variable and assign it to an empty array
    let newArray = [];
    //test if number is negative
    if (number < 0) {
        //if negative, return empty array
        return [];
        //else test if number is greater than array length
    }else if (number > array.length) {
        //if true, return whole array
        return array;
        //else test if array is not an array
    }else if (!(Array.isArray(array))) {
        //if true, return empty array
        return [];
        //else test if value type of number parameter is a number or if it exists
    }else if (typeof number !== 'number' || number === undefined) {
        //if it is not a number or does not exist, return first element of array
        return array[0];
        //if none of the above return, iterate through array with a for loop, using number as the range
    }else {
        for (let i = 0; i < number; i++){
            //push <number> of array items into newArray
            newArray.push(array[i])
        }
    }
    //return newArray
    return newArray;
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
 
_.last = function(array, number) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //test if number is negative
    if (number < 0) {
        //return empty array
        return [];
        //else if number is great than the length of the array
    }else if (number > array.length) {
        //return array
        return array;
        //test if input array is not an array
    }else if (!(Array.isArray(array))) {
        //if not an array, return empty array
        return [];
        //else, test if input number is not a number
    }else if (typeof number !== 'number' || number === undefined) {
        //return last element of array
        return array[array.length - 1];
        //else return the last <number> of items of array
    }else{
        //iterate through array
        for (let i = array.length - number; i < array.length; i++) {
            //push items into newArray
            newArray.push(array[i]);
        }
    }
    return newArray;
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
    //loop through input array
    for (let i = 0; i < array.length; i++) {
        //test if current item equals input value
        if (array[i] === value) {
            //if true, return index
            return i;
        }
    }
    //else return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// _.contains = function(array, value) {
//     for (let i = 0; i < array.length; i++) {

//     }
//   }

  _.contains = function(array, value) {
    //use .includes with a ternary operator to test if the value is in the array. True if so, false otherwise.
  return array.includes(value) ? true : false;
  }




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //iterate through collection
        //call the function once for each element of the collection
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection)
        }
    //else it's an obect
    }else {
        for (var key in collection) {
            func(collection[key], key, collection)
        }
    }
    return collection;
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    //create variable and assign it to an empty array
  let newArray = [];
  
  //use for loop to iterate through input array
  for (let i = 0; i < array.length; i++) {
  
    //use if statement to test if if current value of array is not in the newArray && is not an empty string
  if (newArray.indexOf(array[i]) === -1)
  //if it passes both test, push that value into the newArray
    newArray.push(array[i])
  
  }
  return newArray;
  }



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //test if function call on current item is true
        if(func(array[i], i, array) ===  true) {
            //if true, push into newArray
            newArray.push(array[i]);
        }
    }
    //return newArray
    return newArray;
}



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //test if function call on current item is false
        if (func(array[i], i, array) === false)
        //if false, push into newArray
        newArray.push(array[i]);
    }
    //return newArray
    return newArray;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    //create three array variables
    let newArray = [];
    let truthyArray = [];
    let falsyArray = [];

    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //test if function call is truthy
        if (func(array[i], i, array)) {
            //if true, push into truthy array
            truthyArray.push(array[i]);
            //esle function call is falsy
            //push item into falsy array
        }else {
            falsyArray.push(array[i]);
        }
    }
    //push truthyArray into newArray
    newArray.push(truthyArray);
    //push falsyArray into newArray
    newArray.push(falsyArray);
    //return newArray
    return newArray;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //if array, loop through array
        for (let i = 0; i < collection.length; i++) {
            //push the result of the function call on each item of the collection into the newArray
            newArray.push(func(collection[i], i, collection)) 
        }
        //else collection is an object
    }else {
        //loop through keys value pairs
        for (var key in collection) {
            //push the result of the function call on each value in the collection object into newArray
            newArray.push(func(collection[key], key, collection));
        }
    }
    //return newArray
    return newArray;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    //return the function call of map on the array
    return array.map(function(item) {
        //map pushes the items into an new array
        return item[property];
    })
    
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    //determine if collection is an array
    if (Array.isArray(collection)) {
        // determine if func wasn't passed in
        if (func === undefined){
            for (let i = 0; i < collection.length; i++) {
                //determine if the current item is not truthy
                if (!collection[i]){
                    //return false
                    return false;
                }
            }
        }else { //it was
            for (let i = 0; i < collection.length; i++) {
                //determine if current value return false when passed into func
                if (func(collection[i], i, collection) === false) {
                    //if any item was false, return false
                    return false;
                }
            }
        }
        //else it's an object
    }else {
        //determine if func wasn't passed in
        if (func === undefined) {
            //iterate through object values
            for (var key in collection) {
                //test if any values are falsy
                if (!collection[key]) {
                    //if any item was falsy, return false
                    return false;
                }
            }
        }else { //else function was passed in
            //loop through values in object
            for (var key in collection) {
                //test if function call on any item is false
                if (func(collection[key], key, collection) === false) {
                    //if any item is false, return false
                    return false;
                }
            }
        }
        
    }
    return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    //test if collection is an array
    if(Array.isArray(collection)) {
        //test if function is not given
        if (func === undefined) {
            //loop through collection
            for (let i = 0; i < collection.length; i++) {
                //test if each item is truthy
                if (collection[i]) {
                    //if any item is truthy, return true
                    return true;
                }
            }
            //else the function is given
        }else {
            //loop through collection
            for (let i = 0; i < collection.length; i++) {
                //test if the function call on each iteration of the collection is true
                if (func(collection[i], i, collection) === true) {
                    //if any is true, return true
                    return true;
                }  
            }
        }
        //else the collection is an object
    }else {
        //test if the function is not given
        if (func === undefined) {
            //loop through values of the object
            for (var key in collection) {
                //test if the value is truthy
                if (collection[key]) {
                    //if any value is truthy, return true
                    return true;
                }
            }
            //else the function was given
        }else {
            //loop through values of the object
            for (var key in collection) {
                //test if the function call on each iteration of the collection is true
                if (func(collection[key], key, collection) === true) {
                    //if ny is true, return true
                    return true;
                }
            }
        }
    }
    //return false if no values returned true
    return false;
   
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
