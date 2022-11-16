/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) {
    //use for loop to iterate through animals array
for (let i = 0; i < array.length; i++) {
    //use if statement to test if name at current index equals input string
    if (array[i].name === string) {
        //if true return current item
        return array[i];
    }

}
//else return null
return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, replacement) {
    //loop through input array
    for (let i = 0; i < array.length; i++) {
    //use if statement to test if animal name equals input string
        if (string === array[i].name) {
        //return a reassignment of the current animal in the array with the replacement animal replacement
        return array[i] = replacement;
        }
    }

}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string) {
    //loop through animal array
    for (let i = 0; i < array.length; i++) {
    //use if statement to test if current animal has input name
        if(array[i].name === string) {
    //if name exists, use .splice() method to remove it
             array.splice(i, 1);
             return array;
         }
    }
  
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object) {
    //use for loop to iterate through animals array
    for (let i = 0; i < array.length; i++) {
        //use if statement to test if object has name, object has species, object name equals current name
        //use AND operator in test
        if (object.name.length > 0 && object.species.length > 0 && object.name === array[i].name) {
            //(if object has no name or no species or it's name equals current name, return array, end function)
            return array;
        }
        
    }
    //else push object into animals array and return updated array
    return array.push(object);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
