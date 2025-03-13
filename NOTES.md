<!-- JAVASCRIPT INTERVIEW QUESTIONS AND ANSWERS -->
# Advanced Topics:
- How does JS garbage collection works?
   Before understanding garbage collection , its important to know how JS manages memory
    - Allocation- memory is allocated when you declare variables, objects, or functions.
    - Usage - allocated memory is being used by the program ex.storing values/executing fuctions
    - Release [garbage collection]- When object is no longer needed it is removed from the memory by garbage collector.
   # Where does JS store data?
   - Heap memory [for objects]- large, unstructured memory where objects are dynamically allocated
   - stack memory [for primitives and function calls]- A structured memory space where primitives and function calls are stored
    *When a function is called, JS creates a stack frame in memory and removes it once the function is completes. However objects remain in the heap until garbage collection occurs*
   Garbage collection in Js is an automatic memory management process where JS engine 
   identifies and frees up memory thats no longer needed preventing memory leaks and optimizing performanace
   # How it works?
   - JS uses a technique called -reference counting- and - mark and sweep - for garbage collection
   # -reference counting- 
     - Each object in memory has a reference count(no of times its referenced).
     - If the object's reference count drops to 0, it is eligible for garbage collection
     -- Problem - Circular references (where 2 objects reference each other) can cause memory leaks
   # - mark and sweep -Algo (USed in mordern JS engines such as v8[chrome and node.js] )
     - garbage collector starts at root objects (like window in browsers),
     - it marks all objects that are reachable through through references
     - any unmarked/unreachable objects are considered garbage and removed
     - this method avoids issues with circular references 
    # How to avoid memory leaks in JS: 
    - use let and const instead of var(remains in memory longer due to function scoping) to limit variable scope
    - remove event listeners when they are no longer needed
    - Nullify(manually remove references) references to large objects when they are no longer needed  (obj = null)
    - Be mindful of closures, as they can retain references longer than necessary.
    - Use WeakMap and Weakset[automatically removes references when objects are no longer used]
    # causes of memory leaks in JS
     *memory leaks can occur if objects remain referenced unnecessarily*
     *Common causes are*: See leaks.js for examples
     - Unintentional  Variables
     **variables declared without let, const, var automatically become global**
     - Forgotten Timers and Intervals
     **if u use setInterval()/setTimeout() but forget to clear them, they continue to consume memory**
     - Detached DOM Elements
     **If JS keeps a reference to an element removed from the DOM, the memory remains allocated** 
     - Closures Holding references
     **Closures can prevent garbage collection if they maintain references to large objects**
     - How to [DEBUG] memory Issues in JS
     #### Use chrome Devtools(Performance and memory tab => F12/ Ctril + Shift + I)
          * go to memory tab , take a heap snapshot to analyze memory usage and look for detached DOM elements
     #### Use console.memory in browsers
         console.log(peformance.memory); //logs current memory usage
     #### Monitor Heap Usage in Node.js
            Use [heapdump] module in Nodejs to capture memory snapshots


- What are weak references[WeakMap,WeakSet]?
  Weak references in JS allows an object to be referenced without preventing it from being garbage collected, especially in case of large objects that maynot need to persist in memory indefinitely
  ## WeakMap

     * Its like a regular map but with some key differences:
     - The keys must be objects ( you cannot use string, numbers, or any other primitive values)
     - If an object key has no other references, its automatically gets removed from the WeakMap when garbage collection happens
     - it doesnot allow iteration (you cant use .keys(), .values(), .forEach()).
     - it does not have a .size property (because items can be removed anytime)
        #### JavaScript
        ```markdown
        ```javascript
        let weakMap = new Weakmap();
        let user = {name: "Alice"};  
        weakMap.set(user, "Some private data");//add user to weakMap
        console.log(weakMap.get(user));// Output: Some private data
        user = null;// Remove the reference to user
        //object noe eligible for garbage collection 
        //WeakMap automatically removes it from memory
    -  When to use WeakMap?
      * Caching objects: Store temporary data without worrying about manual cleanup
      * Hiding private data:Associate hidden values with objects without exposing them publicly
          
     
     
     

- Explain Generators and Iterators in JS
- What are ES6 Modules and how are they different from Common JS?
- How do You Prevent memory leaks in Js?
  ## WeakSet : Similar to a regular set but with some diffrences:
    - it only stores objects (no numbers, strings, or primitive values)
    - if an object is no longer referenced anywhere else, it gets automatically removed from WeakSet
    - it doesnot allow iteration (you cant use .keys(), .values(), .forEach()).
    - it does not have a .size property (because items can be removed anytime)
    #### JavaScript
        ```markdown
        let weakSet = new WeakSet();

        let obj1 ={id : 1};
        let obj2 ={id : 2};
        //add objects to weakset
        weakSet.add(obj1);
        weakSet.add(obj2);

        console.log(weakSet.has(obj1));//Output: true
        //Remove references to obj1
        obj1= null;
        //obj1 will be automatically removed from Weakset
        ***when to use weakset***
        - tracking DOM elements: Automatically remove elements when they are removed from the psage
        - tracking active users or sessions: store active users temporarily without keeping them in the
        memory forever
        #### JavaScript
        ```markdown
        //real world example WeakMap for private data
        //weakmap is often used to store private data inside object without exposing it publicly
        //see leaks.js for code
