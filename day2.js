// 1.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
// these are just different ways of invoking a fn
// when you are calling a function using any of these three then don`t have to define in the fn that it will be taking obj as a parameter
//  it will assume that the first argument which is coming while callng the fn will be an obj only

let employee1 = {
    name: "Ravi",
    employeeCode: 1,
    domain: "Technical",
    displayInfo: function(){
        console.log(this.name, this.employeeCode, this.domain);
    }
}
console.log(employee1.name);
 employee1.displayInfo();





//2. What are objects in javascript?
// objects are the non-primitive datatypes and are used to store multiple data in the form of key value pairs

const student = {
    fName: "Harsh",
    lName: "Gujral",
    profession: "Comedian",
    31: "Age",
    displayInfo: function(){
        console.log (`The first name of the student is ${student.fName} and the last name is ${student.lName}
        and its profession is ${student.profession} and its age is ${student[31]}`);
    }
}

console.log(student);


// 3.What are function constructors?
// function constructors is kind of regular function to create multiple objects at a time. the first letter should be capital and 'new' keyword is mandatory while using the function construtor

function person(name, salary) {
    this.name = name,
    this.salary = salary
}
const person1 = new person('thriveni', 50000);
console.log(person1.name);


// 4.Explain prototypes

// prototypes are nothing but a structure of any object. inside any object we will be creating this object.

studentTwo.__proto__ = studentOne;
console.log(studentTwo);
console.log(studentTwo.age);
console.log(studentTwo.showDetails());

let myArr = [1,2,3,4,5];

console.log(myArr.__proto__s);
console.log(myArr.__proto__s.__proto__s);
console.log(myArr.__proto__s.__proto__s.__proto__s);



//5. What is prototype chain

const studentOne = {
    name: "thriveni",
    age: 24,
   StudentDetails: function(){
        console.log(`name ${this.name}age ${this.age}`);
   
    }   
}
const studentTwo = {
    name:"thiru",
}
console.log(studentOne.__proto__);
console.log(studentTwo.__proto__);
console.log(studentTwo.__proto__.__proto__);

// 6.Give an example of inheritance using function constructor
// 


//7. What are callbacks?
// callback fn's - these are those kind of fn's, which can be callback after certain period of time or as and when required.

const sayHi = (friendsName) => { //callback fn
    console.log('hello ${friendsName}! I hope you are doing good');

}
const greeting = (nameOfFriend, callbackFunction) => {
    console.log('i am calling back a fun named ${callbackFunction}. watch out!!');
    callbackFunction(nameOfFriend); //sayHi ("Anand"); // calling a callback fn
}
greeting("Anand",sayHi);


//8. What is the use of setTimeout

// execute once after d timeout fades

const boardPassengers = (n, wait) => {
    const peoplePerGroup = n/3;//60

    setTimeout(()=>{
        console.log(`We are boarding all ${n} passengers`);
        console.log(`There are 3 groups with ${peoplePerGroup} passengers in each group`);
    },wait*1000);//3secs
    console.log(`Starting onboarding of the passengers in ${wait} hrs`);
   
}
boardPassengers(180,3);


// 9.What are pure functions?
// function which is not depend on external functions

function calculateGst(prize) {
    console.log(prize*0.5);
}
calculateGst(10);