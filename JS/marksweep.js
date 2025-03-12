function testGC() {
    let obj1 = {name:"John"};
    let obj2 = {age:25};
    obj1.ref = obj2;
    obj2.ref = obj1;
    console.log(obj1);
}

let myObj = testGC(); //Objects are still referenced, so they are not garbage collected
//Once myObj is set to null, circular references are unreachable 

myObj = null; // garbage collector cleans up obj1 and obj2
