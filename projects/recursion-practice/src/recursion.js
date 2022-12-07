// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
  //base
  if (n === 0) {
    return product;
  }
  if (n < 0) {
    return null;
  }

  //recursion
  //product equals the facotor of product and the current integer
  product *= n;

    //return function call on n - 1, product
  return factorial(n - 1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total = 0) {
  //base
  if (array.length === 0) {
    return total;
  }
//recursion
//total equals the sum of itself and the current item in the array
  total += array[0];

//return function call current item of array (using slice), and total
  return sum(array.slice(1), total);
 
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //base
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base
  //test if n equals 0. return true
  if (n === 0) {
    return true;
  }
  //test if n equals 1, return false
  else if (n === 1) {
    return false;
  }
  //if n is negative, return call function on n + 2
  if (n < 0) {
    return isEven(n + 2);
  }
  //return function call on n - 2
return isEven(n - 2);  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0) {
  //test if n equals 0
if (n === 0) {
  //return sum
  return sum;
}
//test if n is negative
if (n < 0) {
  //sum equals itself plus n plus 1
  sum += (n + 1);
  //return the result of a function call on n plus 1 and the current value of sum
  return sumBelow(n + 1, sum); 
}
//if n is not negative, sum equals itslf plus n minus 1
sum += (n - 1);
//return the result of a function call on n minus 1 and the current value of sum
return sumBelow(n - 1, sum);
}


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  //base
  //test if x - y equals 1 OR y - x equals 1
  if (x - y === 1 || y - x === 1) {
    //return output
    return output;
  }
  //test if input integers are euqual to each other
  if (x === y) {
    return output;
  }

  //test if x is less than y
  if (x < y) {
    //push x + 1 into array
    output.push(x + 1);
    //return function call of range on x + 1, y and output
    return range(x + 1, y, output);
    //test if x is greater than y
  } else if (x > y) {
    //push x minus 1 into array
    output.push(x - 1) 
    //return function call of range on x -1, y and output
    return range(x - 1, y, output);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp, product = 1) {
  //base
  //test if exp equals 0.
  //return default parameter
  if (exp === 0) {
    return product;
  }
  //test if exp is negative
  if (exp < 0) {
    //product equals the result of dividing it by base
    product /= base;
    //return result of function call on base, exp + 1, and product
    return exponent(base, exp + 1, product);
  }
  //else product equals result of multiplying itself to base
  product *= base;
  //return result of function call on base, exp - 1, and product
  return exponent(base, exp - 1, product)
}

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base
  //test if n equals 1. return true.
  if (n === 1) {
    return true;
    //else test if n equals 0. return false
  } else if (n === 0) {
    return false;
  }
  //return the result of calling the function on n divided by 2.
  return powerOfTwo(n / 2);
  
   
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, array = []) {
  //base
  //test if length of string is 0
  if (string.length === 0) {
    //return default array, joined together
    return array.join('');
  }
  //use unshift to add the 0 index of the string to the beginning of the array
  array.unshift(string[0]);
  //return the result of calling the function on the string, sliced, and array
  return reverse(string.slice(1), array)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //reassign string to itself with spaces replaced with empty string. Use regular expression
  string = string.replace(/\s/g, '')
  //test if length of the string is 0 OR 1
  if (string.length === 0 || string.length === 1) {
    //return true
    return true;
  }
  //test if first character of string equals last character of string
  //force to lowercase
  if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
    //return the result of calling the function on the string with the first and last
    //character sliced off
    return palindrome(string.slice(1, -1));
    //else it's not a palindrome and return false
  }else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, total = 0) {
  if (y === 0) {
    return total;
  }

  if (x < 0 && y > 0) {
    total += x;
    return multiply(x, y - 1, total);
  }
  else if (y < 0 && x > 0) {
    total -= x;
    return multiply(x, y + 1, total);
  }
  else if (y < 0 && x < 0) {
    total -= x;
    return multiply(x, y + 1, total);
  }
  total += x;
  return multiply(x, y - 1, total);

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, output = 0) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base
  //test if both strings have length of 0. Return true
  if (str1.length === 0 && str2.length === 0) 
  return true;
  //test if first character of str1 equals first character of str2
  if (str1[0] === str2[0]) {
    //return the result of the function call on str1 and str2, with first character sliced off
    return compareStr(str1.slice(1), str2.slice(1));
  }
  //if function above can't return, return false
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array = []){
  //base
  //if length of string is 0...
  if(str.length === 0) {
  //return array
    return array;
  }
//recursion
//push first index of the string into the array
array.push(str[0]);
//return the result of the function call of the string with first character sliced, and array
return createArray(str.slice(1), array);
};

// 17. Reverse the order of an array
var reverseArr = function (array, newArray = []) {
  //base
  //test if array.length is 0
  if (array.length === 0) {
    //return newArray
    return newArray;
  }
  //recursion
  //use unshift to put the current item of array into newArray
  newArray.unshift(array[0]);
  //return the result of the function call of the string with first character sliced and array
  return reverseArr(array.slice(1), newArray);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array = []) {
  //base
  //test if length equals 0
  if (length === 0){
  //return array
     return array;
    }
    //recursion
    //push value into array
    array.push(value);
    //return the result of the function call on the value and the input length decremented by 1, and the array
    return buildList(value, length - 1, array);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  //base
  //test if array.length is 0
  if (array.length === 0) {
  //return count
    return count;
  }
  //recursion
  //test if value at first index of array equals input value
  if (array[0] === value) {
    //increment count
    count++;
  } 
  //return the result of a function call on the the first index of the array, the value and count
  //slice the array
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {
  //base
  //test if length of array is 0
  if (array.length === 0) {
    //if true, return output
    return output;
  }
  //push the result of the function call of the callback function on the current item of the 
  //array into output
  output.push(callback(array[0])); 
  //return the result of the function call of rMap on the sliced array, callback, and output
  return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

//add default parameter fib to the function. It includes 0 and 1
var nthFibo = function(n, fib = [0, 1]) {
  //if n < 0 return null
  if (n < 0) {
    return null;
  }
  //if n is less than 1, return n
  if (n < 1) {
    return n;
  }
//rest if length of fib array equals input n + 1
  if (fib.length === n + 1) {
    //return the value at the n index of fib
    return fib[n];
  }
  //find the result of the last two values in the fib array and add them together
  //push that value into the fib array
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  //return the result of the function call of nthFibo on n and fib
  return (nthFibo(n, fib));
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //base
  //test if input length is 0
  if (input.length === 0) {
    //if true, return output
    return output;
  }
  //push 0 index value of input into output. Force to upper case
  output.push(input[0].toUpperCase());
  //return the result of calling the recursive function on the input array and output array
  //slice first item off input array
  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  //test if length of the array is 0
  if (array.length === 0) {
    //if true, return output
    return output;
  }
  //push 0 index value of input array into output. Force first character to upper case.
  //Use slice method and concatenat first character back to remainder of word
  output.push( array[0].charAt(0).toUpperCase() + array[0].slice(1));
  //return the result of calling the recursive function on the input array and output array
  //slice first item off input array
  return (capitalizeFirst(array.slice(1), output));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //base
  //test if length of string is 0
  if (str.length === 0) {
    //return obj
    return obj;
  }
  //recursion
  //give the obj a key of the 0 index of str. Assign it to itself + 1 OR 1
  obj[str[0]] = obj[str[0]] + 1 || 1;
  //return the result of the function call on str and obj. Slice first character off str
  return letterTally(str.slice(1), obj);

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
  //base
  //test if length of list is 0
  if (list.length === 0) {[]
    //return output
    return output;
  }
  //recursion
  //test if 0 index of array does not eqauls 1 index of array
  if (list[0] !== output[output.length - 1]) {
    output.push(list[0]);
  }
  return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
  //test if length of array is 0
  if (array.length === 0) {
    //return output
    return output;
  }
  //recursion
  //test if 0 index of array is 0 AND does not equal the value of the last index of the output array
  if (array[0] === 0 && array[0] !== output[output.length - 1]) {
    //push value into output
    output.push(array[0]);
    //else test if value of 0 index is not 0
  }else if (array[0] !== 0) {
    //ps value into output
    output.push(array[0]);
  };
  //return the result of the function call on the array and output. Slice first item from array
  return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = []) {
  //base
  //test if length of array is 0
  if (array.length === 0) {
    //return output
    return output;
  }
  //recursion
 
  if (output.length === 0) {
    if (array[0] > 0) {
    output.push(array[0])
    }
   if (array[0] < 0) {
    output.push(array[0] - array[0] * 2)
    }
  } else if (output.length % 2 === 0 && array[0] > 0) {
    output.push(array[0]);
  } else if (output.length % 2 === 0 && array[0] < 0) {
    output.push(array[0] - array[0] * 2);
  } else if (output.length % 2 !== 0 && array[0] > 0) {
    output.push(array[0] - array[0] * 2);
  } else if (output.length % 2 !== 0 && array[0] < 0) {
    output.push(array[0]);
   } 
  
  return alternateSign(array.slice(1), output);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newString = '') {
  //base
  //test if length of string is 0
  if (str.length === 0) {
    return newString;
  }
  //recursion
  //test if 0 index of string eqauls any number less than 10, and convert it to its word version
  if (str[0] === '1') {
    newString += 'one';
  }else if (str[0] === '2') {
    newString += 'two';
  }else if (str[0] === '3') {
    newString += 'three';
  }else if (str[0] === '4') {
    newString += 'four';
  }else if (str[0] === '5') {
    newString += 'five';
  }else if (str[0] === '6') {
    newString += 'six';
  }else if (str[0] === '7') {
    newString += 'seven';
  }else if (str[0] === '8') {
    newString += 'eight';
  }else if (str[0] === '9') {
    newString += 'nine';
  }else {
    newString += str[0];
  }
  return numToText(str.slice(1), newString);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
