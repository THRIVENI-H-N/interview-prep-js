//1. What are promises and why do we need them?

// promises:  Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to 
// unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not 
// able to do so fetches us with an error message.

// // It have three stages.
// // 1. Pending            
//    2. Resolved(fulfilled)       
//    3.    Rejected.


const getId = new Promise((resolve, reject) => { //producer//resolve and reject are executer function
    setTimeout(()=>{
        let id = [1,2,3,4,5];
        resolve(id);
        reject("error in fetching the details");
     }, 2000);
    
});

getId //consumer
.then((data)=>{
    console.log("the data resolved is", data);
})
.catch((error)=>{
    console.log(error);

});

   .finally(()=>{
    console.log("end of Promise");
});





// 2.What is the purpose of async/await keywords?
// both are introduced in ES8 version.
// async/await - s They are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
//  to return a promise instead of a value. 

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.





// 3.What is hoisting?
// hoisting: it brings the declaration of the variables in the top of the code and in functions also.
// it will happen in backend.

console.log(myCompany); //undefined
var myCompany;
myCompany = "prepbytes";
console.log(myCompany); //prepbytes





//4. What is the DOM?
// DOM-document object modal. it is basically html file.
// DOM allows us to create dynamic web pages.
// it represents the page so taht programs can change to document structure,style and content
// represents the document as nodes and objects




//5. Difference between undefined vs not defined vs NaN

// not defined:- when the variable is not found
// undefined:- when the variable is found but the value is not found
// const listOfNumbers2 = [2,3,4,5,6,1,2,3,4,false,"thiru"];
// NaN - not a Number



//6. How many operators do we have in JS ?
// we use to perform certain operations on oparends.

// there are 7 types
// // Arithmetic Operators
// Comparison Operators
// Bitwise Operators
// Increment,Decrement Operators
// Logical Operators
// Ternary Operators
// Comma Operator


//7. What is callback hell
 //Callback Hell - Callbacks are just the name/convention for using JavaScript. It instead of immediately 
// returning results like other functions, takes time to produce the result. So, If we stuck in some 
// particular call which prevents us from making further calls ends us into callback Hell.
// //The structure of callback hell looks like pyramid/arrow shape.
// //This makes our code look haphazard and makes it hard to understand.
// //We should always try to avoid using multiple Callbacks to end up falling into callback hell.
// //We use Promises to prevent using Callbacks and thereby avoiding Callback Hell.

// const getEmpId = () => {
//     setTimeout(()=>{
//         console.log("Fetching the ID`s");
//         let id = [1,2,3,4,5];
//         console.log(id);
//         setTimeout(()=>{
//             let empDetails = {
//                 fName: 'thiru',
//                 lName: 'bajaj'
//             };
//             let empDetails = {
//             console.log('the name of the employee is ${empDetails.fName} the name of the employee is ${empDetails.fName} ');
//             setTimeout(()=> {
//                 (empDetails.gender = 'male'),
//                 console.log('the name of the employee is ${empDetails.fName} the name of the employee is ${empDetails.fName} '););
//             })2000
//         })2000 
//     })2000
// }




//8. What is promise chaining
const getId = new Promise((resolve, reject) => {
	setTimeout(() => {
		let id = [1, 2, 3, 4, 5];
		resolve(id);
		reject('Error in fetching the details'); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
	}, 2000);
});

const getEmpDetails = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(data) => {
				let empDetails = {
					fName: 'Ravi',
					lName: 'Patel',
					age: 24,
				};
				resolve(
					`The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
				);
			},
			2000,
			data
		);
	});
};

getId
	.then((id) => {
		console.log('The id is', id);
		getEmpDetails(id[2])
			.then((data) => {
				console.log('the data is', data);
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	})
    .finally(()=>{
    console.log("End of promise chaining");
})



// 9.What are arrow functions?
// Arrow function:- in JS these are the most used functions.
// which is used to write the syntax in easier form 
// no need of a function keyword in arrow functions. we can use const keyword.
// hoisting is not useful in arrow function.


const addition = (a,b) =>{
    let result = a+b;
    console.log(result);
}
console.log(addition); // o/p will be like "it will be printing everything after the fn name"
addition(2,3);


// 10.Give an example of async/await

async function tryingPromises() {
    console.log("i am inside the function using async/await");
    const response = await fetch("https://api.github.com/users");
    console.log("before the response is fetched");
    const users = awit response.json();
    console.log("users resolved");
    return users;

}

console.log("before calling the function");
let data = tryingPromises();
console.log("after calling the func");

