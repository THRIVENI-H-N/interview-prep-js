// 1.What is a Temporal Dead Zone?
// the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value 









//2. What is the for-in loop in JavaScript? Give its syntax

// // allows you to access the indexes of the array
// for(const index in fruits){ 
//     console.log(index);
// }

// The JavaScript for in statement loops through the properties of an Object:
            for (key in object) {
                // code block to be executed
              }
 //   Each iteration returns a key (x)
 //   The key is used to access the value of the key




//3. Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// local or Function scope:- Variables that are declared inside a function or a method have Local or Function Scope.
// It means those variables or functions which are declared inside the function or a method can be accessed within that function only.

// Block Scope:- Block Scope is related to the variables or functions which are declared using let and const since var does not have block scope.
//  Block Scope tells us that variables that are declared inside a block { }, can be accessed within that block only, not outside of that block.

// Scope Chain:- JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
// Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
// This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.


//4. What is difference between null and undefined and where to use what?

// In JavaScript, undefined is a type.
// whereas null an object.

// undefined:-It means a variable declared, but no value has been assigned a value.

// null:-null in JavaScript is an assignment value. You can assign it to a variable.


//5. what is Symbol?
// Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined. 
// It was introduced in ECMAScript 2015, so just a few years ago. It's a very peculiar data type. 
// Once you create a symbol, its value is kept private and for internal use




//6. Write code to explain map and filter in arrays

// both are methods of arrays
// map wont reduce the length of the original array.
// while filter can alter the size of the original array.


let a=[1,2,3,4,5,6,8,10]
const mapnum=a.map(item=>item/4)
console.log(mapnum);
const filternum=a.filter(item=>item<2)
console.log(filternum);

//7. Explain passed by value and passed by reference
// The difference between pass-by-reference and pass-by-value is that modifications made to arguments passed in by reference in the called function
// have effect in the calling function, whereas modifications made to arguments passed in by value in the called function can not affect the calling function

//pass by value
let b=5;
let c=b;
 b=b+c;
console.log(b);
console.log(c);


// in pass by reference, non primitive data type velue will be passed

//pass by referance
let object1={
    lname:"hgyugvhbnx",
    age:23,
}
let obj2=object1;
console.log(obj2);


//8. Please explain Self Invoking Function and its code

// self invoking function:-self invoking functions are kind of an anonymous function which gets invoked automatically after its declaration.we dont have to manually invoke it.
    // example-
    (function(){
        let x="hello there sorry for that moments!";
        console.log(x);
    })();

    // A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition.
    // An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses ()
            // (function (){

            // })()



// 9.What is an event loop and call stack

//  event loop:- The event loop is a constantly running process that monitors both the callback queue and the call stack. 

// call stack:-  If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack






