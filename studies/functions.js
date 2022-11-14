/**
 * FUNCTIONS: 
 * 
 * Functions ar blocks of reusable code. They are designed to take in certain data, perform an action, or "function", on that data, and output the result 
 * the action had on the input data.
 * 
 * Functions are reusable, because once made, a function can be used over and over again with different data inputs. Because of this, developers can save time by not needing 
 * to write out code for every action they want to perform, but can rather call on functions that they have access to to do the heavy lifting.
 * 
 * Functions are made up of different parts, and work in what migh be called phases.
 * 
 * The first phase of a function is to create a function declaration or a function expression. This defines what action the function will perform. Declaring a function includes
 * naming the function, inputting parameters if required, writing the necessary code to perform the required action, and giving a return statement that is the result of the action.
 * 
 * Paramets are placeholders for the data that can be input into the function. Because functions can be reused on different input data, when declaring a function, functions that take
 * in data are shown with placeholders called parameters in place of actual input data.
 * 
 * Once a function has been declared, it can be used by doing what is called a function call. In a function call, the parameters, if any, are replaced with the actual data we are looking
 * to perform the function on. In a function call, input data are called arguments. Once functions are declared, they can be called with different arguments. 
 * 
 * Once the function acts upon the input arguments, the function will end when it reaches a return statement, which outputs the result of the function
 */



// 1. Function Phases and Function Inputs
// The first phase of a function is to declare the function.

function add(x, y) {  // if x = 2 and y = 5
    let sum = x + y;  //  sum = 2 + 5 = 7
    return sum;       // return 7
}

// The above example shows a function declaration. The function is called "add". In the parentheses next to "add" are two parameters, x and y, which are placeholders for futuer input data.
// The second line of the function shows the code that the function will perform on the input data. In this case it will add any two input numbers, assign them to the variable "sum".
// The third line of the function shows the return statement, which is the value of the sum variable.
// This example was written with the middle line to show how a function runs input data through code to create an output. However, it could be simplified as the following:

function add(x, y) {  // i x = 2 and y = 5
    return x + y;     // return result of 2 + 5 which is 7
}

// In this simplified version of the function, the return statement will be the same, but rather than add a separate line of code in the middle to perform the action, the return statement
// will show the result of the action perform in it.


// The second phase of a function is to call the function. Once a function is declared, it can be used. To do this, we call it by giving the name of the function, and replacing 
// the parameters with the arguments to be acted upon.

add(2, 5); // This is how we call the add function declare above.

console.log(add(2, 5));  // This is how we log a function call to the console. The function add is wrapped inside the console.log statement. This function call will perform the function

// on the input arguments, 2 and 5, and print the resulting return of the funcion to the console. 
// Expect the console to show 7.




// 2. Function Definition Syntax
// Functions can be defined in different ways. The most common way is to declare a function, as shown in the above examples, and again here:

function fullName(firstName, lastName) {   // Declaring a function by writing "function" before the name of the function, in this case "fullName", is a function declaration.
    return firstName + ' ' + lastName;
}


// Functions can also be created in a function expression. In this case, a function is assigned to a variable, or rather, the result of the function return is the value of the variable
// so the variable value depends on the input argument for that function when the function is called.

let product = function(x, y) {    // The variable "product" is assigned to the given function. 
    return x * y;                 
}

console.log(product);   

// Expect "function: product" to print to the console. At this point, the variable product points only to the expression of the function it is assigned to.

console.log(product(2, 5));

// Expect 10 to print to the console. Because the given function is tied to the value of "product", we could say "product" is the name of the function, and product can now be called
// as the function. We call "product" by writing it out with the paretheses giving it it's arguments to act on.




// 3. Inputs and Outputs
// While the examples above describe and show functions taking in arguments and returning a value, functions are able to be used without either arguments or a return statement.
// In the case of the return statement: a return statement has a couple of different purposes. It shows what the code of the function should result to, but also tell the program 
// when the function is finished. When a function runs its course and reachs te return statement, it can return the result and it knows it's completed the function and can exit the function.
// In the case that no return statement is provided, the function will return a default statement, "undefined". 

function multiply(x, y) {
    let product = x * y;
}

console.log(multiply(2, 5));   // Expect "undefined" to print tothe console. Because the function is not written to return the actual value of the action it's performing, it won't, and

// will instead print the default value of "undefined".


// On the other hand, functions can also be used without parameters, meaning it doesn't need to take any arguments to perform an action on. In function like this, a declared function is designed
// to deliver a value without perform an action on any input data.

let greeting = function() {
    return "Hello!";
}

// Greeting is a function expression that does not take any parameters. This when the function is called, the given return statement will be executed. It needs no arguments to make this happen.

console.log(greeting());   // Expect "Hello!" to print to the console.