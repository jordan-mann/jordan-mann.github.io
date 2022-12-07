////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //create empty array
  let output = [];
  //test if start equals end
  if (start === end) {
    //return empty array
    return output;
  }
  //test if step is negative
  if (step < 0) {
    //return empty array
    return output;
  }
  //test if step is not given
  if (step === undefined) {
    //loop through range, incrementing by 1
    for (let i = start; i <= end; i++) {
      //push i into output
      output.push(i);
    }
    //else step is given
  }else {
    //loop through array. Increment by step
    for (let i = start; i <= end; i += step) {
      //push i into output
      output.push(i);
    }
  }
  //return output
  return output;
  
  

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, total = 0) {
  if (array.length === 0) {
    return total;
  }

  total += array[0];
  return sum(array.slice(1), total);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, newArray = []) {
if (array.length === 0) {
  return newArray;
} 
newArray.unshift(array[0]);
return reverseArray(array.slice(1), newArray);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
// newArray = [];
// for (let i = 0; i < array.length; i++) {
//   newArray.push(array[i]);
//   array.unshift(newArray[i]);
// }
// return array;

return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for (let i = array.length - 1; i >= 0; i--) {
    rest = {value: array[i], rest : rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
  //base
  if (list.rest === null) {
    output.push(list.value);
    return output;
  }
  //recursion
  output.push(list.value);
  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
