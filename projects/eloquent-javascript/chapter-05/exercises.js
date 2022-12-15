// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(superArray) {
  //create variable and assign it to the function call of reduce on the superArray
let flatArrays = superArray.reduce(function(acc, current) {
  //reassign seed value to acc and concat method on current
 acc = acc.concat(current);
 //return acc
  return acc;
}, [])
//return flatArrays
return flatArrays;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {
  //test if function call of testFunc on value is truthy
  if (testFunc(value)) {
    //if truthy, call bodyFunc on value
    bodyFunc(value);
    //then return and recursively call loop again, and update the input value
    //by making it the result of a function call of updateFunc on value
    return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
  }
  //if the original value passed into testFunc was falsy
  return false;
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  //loop through input array
  for (let i = 0; i < array.length; i++) {
    //test if function call on current element of array IS NOT truthy
    if (!func(array[i])) {
      //if not truthy, return false
      return false;
    }
  }
  //else return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  //create arrays to store ltr and rtl
  let ltr = [];
  let rtl = [];

  for (let i = 0; i < string.length; i++) {
    let script = characterScript(string.charCodeAt(i));

    if (script !== null) {
      if (script.direction === 'ltr') {
        ltr.push(script);
      }else if (script.direction === 'rtl') {
        rtl.push(script);
      }
    }
  }
  if (ltr.length > rtl.length) {
    return 'ltr';
  }else {
    return 'rtl';
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
