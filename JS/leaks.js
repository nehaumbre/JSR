// Unintentional Global variables
function badfunction(){
    undeclaredVar = "Im global!";
}
badfunction()

// Forgotten Timers and Intervals
let interval = setInterval(() => console.log("still running..."), 1000);
clearInterval(interval); //Prevents memory leaks

// Detached DOM Elements
let myDiv = document.getElementById("myDiv");
document.body.removeChild(myDiv); // Removed from DOM but still in memory

//to fix
myDiv =null; // allow garbage collection

// Closures Holding references
function createClosure(){
    let bigArray = new Array(1000000).fill("data");
    return function () {
        console.log(bigArray.length);
    };
}
let closureFunc = createClosure();
closureFunc =null; //Allowing array to be garbage collected


// How to avoid memory leaks in JS
// use of let and const instead of var
function example(){
    let temp ={name:"neha"} //only exist within this function
    //var remains in memory longer due to function scoping
}


//  manually remove references
let obj ={data :"largeData"};
obj=null; //Marks for garbage collection

// remove event listeners
let button = document.getElementById("myButtom");
function clickHandler(){
    console.log("clicked!");
}
button.addEventListener("click", clickHandler);
button.removeEventListener("click", clickHandler);//Prevent  memory leaks

// WeakMap and WeakSet
let weakMap = new WeakMap();
let objc = {name :"Neha"};
weakMap.set(objc, "data");
objc = null; //weakmap automatically removes the reference

//debug memory issues in JS
//browser
console.log(performance.memory);//use in browser console

//nodejs heapdump module

const v8 = require("v8");
console.log(v8.getHeapStatistics());
//real world example WeakMap for private data
const privateData = new WeakMap();
class Person {
    constructor(name){
        privateData.set(this,{secret:`Hello, $(name)!`});
    }
    getSecret(){
        return privateData.get(this).secret;
    }
}
let person = new Person("Bob");
console.log(person.getSecret()); //Output : "Hello, Bob!"
person = null; //Remove reference to person
//now the private data is automatically garbage collected
// Here the privateData is only accessible inside the class
// Wehn person object is deleted, its associated secret message is 
// also removed from memory
