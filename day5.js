//1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

element=document.getElementsByTagName("h1");
element[0].style.display="none";
function display(){
    element[0].style.display="block"
}





//2. Write code to get 1st H1 element from a webpage using DOM

element1=document.getElementsByTagName("h1")
console.log(element1[0]);


//3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function showTime(){
    const date= new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    console.log(hours, minutes, seconds);
    setTimeout(()=>{
        showTime();
    },1000);
}



//4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replace() {
    const element=document.getElementById("replace");
    element.innerText="Welcome to Elevation Acadamy";   
}




//5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
function hide(){
    const element5=document.getElementsByClassName("hello")
    element5[0].style.display="none"
}




//6. Given an array of 0's and 1's find out number of 0's
Arr=[1,1,0,0,0,1,0,0,1]
const filternum=Arr.filter(item=>item<1)
console.log(filternum);

// let array = [1,0,1,0,1,0];
// let count=0;
// for(let i of array){
//     if(i == 0){
//          count=count+1;
//     }
// }

// console.log(count);



//7. Given an array find out total no. of odd and even nos.

let array1=[1,2,3,4,5,6,7,8,9]
let evensum = 0, oddsum=0;
    
    for (let i = 0; i < array1.length; i++) {
        if (Arr[i] % 2 === 0) {
            evensum=evensum+ array1[i];
        } else {
            oddsum=oddsum+array1[i];
        }
    }
    let array2 = [evensum, oddsum];

   console.log(array2);

   //     let arr = [2,3,4,5,6];
// let x=0;
// let a=0;
// for(let i=0 ; i<arr.length ; i++ ){
//     if(arr[i]%2==0){
//         x=x+1;
//     }
//     else{
//         a=a+1;
//     }
// }
// console.log(x);
// console.log(a);



//8. Given a string find out number of vowels 

let S="thriveni"

let vowels=0;
    vowels = S.match(/[aeiou]/gi).length;
    console.log(vowels)
let vowelsCount=0;
for (var i = 0; i <= S.length - 1; i++) {
      if (S.charAt(i) == "a" || S.charAt(i) == "e" || S.charAt(i) == "i" || S.charAt(i) == "o" || S.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }console.log(vowelsCount);



// let vowels = ["a","e","i","o","u"];

// let str = "hi folks";

// var S=0
// for(let s of str){
//     if(vowels.includes(s)){
//           S=S+1;
//     }
// }
// console.log(S);




//9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

 let obj1 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array']
}

let obj2 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array2']
}

function sameArray(o1, o2) {
    let arr1 = o1.b;
    let arr2 = o2.b;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); // false



