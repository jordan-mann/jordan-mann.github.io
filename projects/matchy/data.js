/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
//give animal object key of species and assign it value of dog
animal.species = 'dog';
//use bracket notation give animal object key value pair of name
animal['name'] = 'Bartholemew';
//use dot notation to create key of  noises and assign it to an empty array
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create noises variable assign it to an empty array
var noises = [];
// use bracket notation to add noise to array
noises[0] = 'barking';
// use push method to add noise to array
noises.push('whining');
//use unshift to add noise to array
noises.unshift('panting');
//use bracket notation to add noise to end of array
noises[noises.length] = 'happy woofing'
//log length of array
console.log(noises.length);
//log array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket notation to add nosises array to noises property on animal object
animal['noises'] = noises;
//add another noise to noises array using any method
animal.noises.push('sad whining');

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animals variable and assign it to an empty array
var animals = [];
//use push method to add animal object to animals array
animals.push(animal);
console.log(animals);

//create duck variable and assign it to an object with same keys as animal object
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}
animals.push(duck);
console.log(animals);

//create whale variable and assign it to an object with same keys as animal object
var whale = {species: 'whale', name: 'Arthur', noises: ['lonely whale cries', 'happy splashing']}
//push whale into animals array
animals.push(whale);

//create lobster variable and assign it to an object with same keys as animal object
var lobster = {species: 'lobster', name: 'Stanislaus', noises: ['silent lobster noises', 'menacing claw clicks']}
//push lobster into animal array
animals.push(lobster);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create friends variable and assign it to an empty array. Array are useful for storing lists of data
var friends = [];
//create function getRandom that takes animals array
function getRandom(animals) {
  //use Math.random and Math.floor and multiply to array length to get random index integer
return Math.floor(Math.random() * animals.length);

}
//create random animal variable that is derived from calling getRandom and getting the animal at the resulting index
var randomAnimal = animals[getRandom(animals)];
//push randomAnimal into friends array
friends.push(randomAnimal.name);

console.log(friends);
//use bracket notation to add friends array to one of the animal obejcts
whale['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}