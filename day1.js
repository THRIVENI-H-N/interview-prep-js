//1. Difference between “ == “ and “ === “ operators.

// both are similar operators for comparision operators. 
// == it checks only the values
// and === checks the both the datatypes and values.

//2. What is the spread operator?

// it is a new version of vs6
// spread operator is nothing but which is used to copy the values/arrays which is already present.
// we need (...)in front of the operator


// 3.What are the differences between var, let and const?

// let: 1. we can declare the variable name in one line and initialize it on another line// or in the same line itself.
// 2. Two variables with same name aren't possible with let
// 3. We can reassign/update the values of the variable which have already been initialized.
// 4. let is block scoped.
 // 5. Let doesn't supports Hoisting.
// default user avatar

// var: 1. we can declare the variable name in one line and initialize it on another line// or in the same line itself.
// 2. Two variables with same name are possible with var
// 3. We can reassign/update the values of the variable which have already been initialized.
// 4. var is global scoped.
// 5. var supports Hoisting.

// const: 1. we have to declare the variable and initialize in the same line itself.
// 2. Two variables with same name aren't possible with const.
// 3. We can't reassign/update the values of the variable which have already been initialized.
// 4. const is block scoped.
// 5. const also doesn't supports Hoisting.
// default user avatar



// 4.What is execution context?
// execution context is nothing but all the operations will takes place in execution contex.
// in this we have memory and code component
// memory component-creation phase
// code component-execution phase



// 5.What is creation phase and execution phase?

// creation phase: *we will asign memory to all the variables.
// * when it allocates memory to n, it stores a special value undefined initially.
// *n case of function it will store the entre function in the memory creation phase.

// execution phase: * when we invoke a function new function contex will be created
//  *we will be executing the code in execution phase.
// *after execution it value allocates the value of '2' for 'n'
// *


// 6.What is meant by first class functions
// FCF`s are nothing but the variables which can be used to pass arguments to other fn.
// fn can be writtened from another fn.
// fn can be assigned to a varible.
// it can be written as a value.
// it is also called as first citizen function.


// 7.What are closures? Give an example of closure
// clousers - its not something that we create manually or explicity. it happens automatically in certain situations which we need to analyze/realize ourselves.
// clouser makes a function remeber all the variables that existed in the function birth place initially.
// any function always have access to the "variable environment(variable which is using)" of the execution context in which the function created.

const ticketBooking = function(){
    let passengerCount0 = 0;
    let passengerCount1 = 0;
    return function(){
        passengerCount0++;
        passengerCount1++;
        console.log(`The count of the passsenger are ${passengerCount0}  ${passengerCount1}`);
    }
}
const bookie = ticketBooking();

console.log(bookie);//fn dfn
console.dir(bookie);
bookie();//The count of the passenger are 1 1
bookie();//The count of the passenger are 2 2
bookie();//The count of the passenger are 3 3



