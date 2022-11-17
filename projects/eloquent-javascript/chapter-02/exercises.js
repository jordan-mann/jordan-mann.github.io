
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create variable hashtags and assign it to an eampy string
  let hashtags = '';
  //use while loop to loop through input number, less times than the input number 
  while (hashtags.length < num) {
    //hashtags incremented to itself and print to console
   console.log(hashtags += '#');
  }
  return hashtags;
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //loop through given sequence
  for (let i = start; i <= end; i++) {
  //solve edge case first
  //test if i is divisible by 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    //print message
    console.log('fizzbuzz');
    //else test if i is divisible by 3
  }else if (i % 3 === 0) {
    //print message
    console.log('fizz');
    //else stes if i is divisible by 5
  }else if (i % 5 === 0) {
    //print message
    console.log('buzz');
    //else print default
  }else{
    console.log(i);
  }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //create variable eachLine and assign it to an empty string
  let length = '';
  //create variable height and assign it to the input parameter
  let height = num;
  //use nested for loops to iterate height twice
    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= height; j++) {
        //test if i + j remainder 2 is 0
        if ((i + j) % 2 === 0) {
          //if true, concatenate a space to the value of length
          length += ' ';
          //else, itest if i + j remainder 2 i not 0
        }else if ((i + j) % 2 !== 0) {
          //if true, concatenate a hashtag to the value of length
          length += '#';
        }
        //use a separate if statement to determine if current item is equal to height
        if (j === height){
          //if true, concatenate a new line character to the value of length
          length += '\n';
          }
        }
       
    }
    //console.log length
    console.log(length);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
