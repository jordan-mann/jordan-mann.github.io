// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jordan-mann.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //assign variable to filter function. Input array and function with current customer
    let males = _.filter(array, function(customer){
        //return filter if customer gender is male
        return customer.gender === 'male';
    });
    //return length of males
    return males.length;

};

var femaleCount = function(array) {
    //assign variable to reduce function. Input array, function and seed
    let females = _.reduce(array, function(acc, customer){
        //test if current customer is female
        if(customer.gender === 'female') {
            //if female, add 1 to acc and return
         return acc + 1;
        }
        //if not female, return current value of acc
        return acc;
    }, 0)
    //return number of females
    return females;
}

var oldestCustomer = function(array) {
    //create variable and assign it to reduce function. Input array and function
    let oldest = _.reduce(array, function(acc, customer) {
        //test if acc value's age is greater than current value's age
        if (acc.age > customer.age) {
            //if greater, return object associate with acc
            return acc;
        }
        //else return current customer object
        return customer;
    })
    //return name property of oldest object
    return oldest.name;
}

var youngestCustomer = function(array) {
    //create variable and assign it to reduce function. Input array and function
    let youngest = _.reduce(array, function(acc, customer){
        //test if age of object associate with acc is less than age of object associated with customer
        if (acc.age < customer.age) {
            // if true, return acc object
            return acc;
        }
        //else return customer object
        return customer;
    })
    //return name property of object associated with youngest
    return youngest.name;
}

var averageBalance = function(array) {
    //create variable and assign it to reduce function. Input array, function and seed
    let total = _.reduce(array, function(acc, customer){
         return acc += Number(customer.balance.replace(/[$,]/g, ''));
    }, 0)
    return total / array.length;
}

var firstLetterCount = function(array, letter) {
    let newArray = _.filter(array, function(customer){
        return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
    })
    return newArray.length;
}

var friendFirstLetterCount = function (array, name, letter) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            let personFriends = _.filter(array[i].friends, function(friend) {
                return friend.name.charAt(0).toLowerCase() === letter.toLowerCase();
            })
            return personFriends.length;  
        }
    }
    
}

var friendsCount = function(array, name) {
    let friends = _.filter(array, function(customer) {
        for (let i = 0; i < customer.friends.length; i++) {
            if (customer.friends[i].name === name) {
                return true;
            }
        }
        return false;
    })
    let names = _.map(friends, function(friend) {
        return friend.name;
    })
    return names;
}

var topThreeTags = function(array) {
    let allTags = _.map(array, function(current) {
        return current.tags;
    })
    let flatTags = allTags.flat();

    let countedTags = {};
   _.each(flatTags, function(current) {
    countedTags[current] = (countedTags[current] || 0) + 1;
   })

   countedTags = Object.entries(countedTags);

   let sortedTags = countedTags.sort(function(a, b) {
    return b[1] - a[1];
   })

   let topThree = _.first(sortedTags, 3);

   let topTags = _.map(topThree, function(current) {
    return current[0];
   })
   return topTags;
}

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
