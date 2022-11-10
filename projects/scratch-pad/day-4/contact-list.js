// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    let obj = {};
    //create id key and assign it to id
    obj.id = id;
    //create nameFirst key and assign it to nameFirst
    obj.nameFirst = nameFirst;
    //create nameLast key and assign it to nameLast
    obj.nameLast = nameLast;

    //return obj
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            //use push method to push new contact into contacts array
            contacts.push(contact);
            return contacts;
            
        },
        findContact: function(fullName) { //'Max Gaudin'
            //use for loop to iterate through contact list
            for (let i = 0; i < contacts.length; i++) {
                //test if current contact object's nameFirst and nameLast equal fullName
                if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){
                    //return contact object if nameFirst and nameLast equal fullName
                    return contacts[i];
                }
            }
        },
        removeContact: function(contact) {
            //use pop method to remove contact object from contacts list
            contacts.pop(contact);
            return contacts;
        },
        printAllContactNames: function() {
            //create empty string to collect all but last name
            let names = '';
            //create empty string to collect last name
            let finalName = '';
            //use ofr loop to iterate through all but last contact of contact lis
            for (let i = 0; i < contacts.length - 1; i++) {
                 names += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            }
            //reassign finalName to last name of contact array
            finalName = contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast;

                //return names and finalName concatenated together
                return names + finalName;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
