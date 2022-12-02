//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { stubFalse } = require("lodash");

function objectValues(object) {
    //create arrray variable and assign it to empty array
    let array =[];
    //use for in loop to loop through object values
    for (let key in object) {
        //use push method and bracket notation to push object values into array
        array.push(object[key])
    }
//return array
return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //create array variable and assign it to an empty array
    let array = [];
    //use for in loop to loop through object values
    for (let key in object) {
        //use push method to push keys into array
            array.push(key);
        
    }
    //use join method to join array into string separated with spaces
    //return array
    return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create array varialbe and assign it to an empty array
    let array = [];
    //use for in loop to iterate over object values
    for (let key in object) {
        //use if statement to test if value is a string
        if (typeof object[key] === 'string') {
            //use push method to push string values into array
            array.push(object[key]);
        }
    }
    //use join method to join array values into string, separated by spaces
    //return array
    return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //use if statement to test if collection is array
    //return 'array
    if (Array.isArray(collection)) {
        return 'array';  
    }
    //else return 'object'
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //use charAt, toUpperCase, and slice to capitalize first letter and add remainder of 
    //word back to capitalized first letter
    //return revised word
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //create array variable and assign it to string, split at the spaces
    let array = string.split(' ');
    //create newArray variable and assign it to an empty array
    let newArray = [];
    //use for loop to iterate through array
    for (let i = 0; i < array.length; i++) {
    //use charAt, toUpperCase, and slice to capitalize first letter of each word and add remainder of 
    //word back to capitalized first letter
    //use push method to push each item into new array
     newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    //use joing method to combine items of array into string, separated with spaces
    //return string
    return newArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //create name variable and assign it to value at name key
    let name = object.name;
    //use charAt, toUpperCase, and slice to force first letter of name to upper case
    //return message with name upper cased
return 'Welcome ' + (name.charAt(0).toUpperCase() + name.slice(1)) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //create name variable and assign it to value at name key
    let name = object.name;
    //force first letter of name to upper case with charAt, toUpperCase, and slice
    name = name.charAt(0).toUpperCase() + name.slice(1);
    //create species variable and assign it to value at name key
    let species = object.species;
    //force first letter of species to upper case with charAt, toUpperCase, and slice
    species = species.charAt(0).toUpperCase() + species.slice(1);
    //return message
    return name + ' is a ' + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //use if statement to test if noises array does not exist
    if (!Array.isArray(object.noises)) {
        //return message
        return 'there are no noises';
    //use if statement to test if noises array exists, and if it is empty
    }else if (Array.isArray(object.noises) && object.noises.length === 0) {
        //return message
        return 'there are no noises'
    }
    
    //else return message by use join method to join noises array into string separated by spaces
    return object.noises.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //use split method to split string into array and assign it to a variable
    let array = string.split(' ');
    //use for loop to iterate through array
    for (let i = 0; i < array.length; i++) {
        //use if statement to test if current value eqauls input word
        if (array[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //use dot notation to access friends array and use push method to add name to array
    object.friends.push(name);
    //return object
    return object;
  }
  

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //test to see if object has friends array
    if (!Array.isArray(object.friends)) {
        //return message
        return false;
    }
    //use for loop to iterate through friends array
    for (let i = 0; i < object.friends.length; i++) {
        //use if statement to test if current item does not eqaul input name
        if ( object.friends[i] === name) {
            //return message
            return true;
        }
    }
    //else return message
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create variable notFriends and assign it to an empty array
    let notFriends = [];
    //create variable person and assign it to an empty object
    let person = {};
    //create variable contacts and assign it to anempty array
    let contacts = [];
  
    //use for loop to iterat through input array
    for (let i = 0; i < array.length; i++) {
        //if name property at current item in array equals input name...
      if (array[i].name === name) {
        //...assign the object at that index to the person object
        person = array[i];
        //if the current item's name property is not the input name...
      }else if (array[i].name !== name) {
        //push the current item's name into the contacts array
        contacts.push(array[i].name);
      }
    }
    
    //loop through the contacts array
    for (let i = 0; i< contacts.length; i++) {
        //if the friends array of the person object does not include the current contact's name...
      if (!person.friends.includes(contacts[i])) {
        //... then push the contact item to the notFriends array
        notFriends.push(contacts[i]);
      }
    }
    //return  notFriends
  return notFriends;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //use bracket notation to access existing key and reassign it
    // or create new key
object[key] = value;

 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //use for in loop to iterate through object properties
for (let key in object) {
    //use if statement and includes to determine if current key is included in array
    if (array.includes(key)) {
        //if current key is in array, delete that key
        delete object[key];
    }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//create variable newArray and assign it to an empty array
let newArray = [];
//loop through input array
for (let i = 0; i < array.length; i++) {
    //use if statement and includes to determine if newArray includes current item ofarray
    if (!newArray.includes(array[i])) {
        //use push method to push unique items into newArray
        newArray.push(array[i]);
    }
}
//return newArray
return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}