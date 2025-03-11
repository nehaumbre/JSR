//The Parser : Parsing is process of analyzing the source code,
//             checking the code for errors, and
//             breaking it into parts
/* AST (The parser produces a Data structure called AST or Abstract syntax tree)
    * AST is a tree graph of source code
    * contains structural or content related details
    * certain things are implicit in tree and no need to be 
      shown hence the name abstract 

    The Interpreter
    * executes code line by line without the need 
      to be compiled into machine code
    * Interpreters can use different strategies to increase performance
       - parse the source code and execute it immediately,
       - translate it into more efficient machine code, 
       - execute precompiled code made by a compiler,
       - or some combination of these.
       In the V8 engine, the interpreter outputs bytecode.
    The Compiler
    The compiler works ahead of time to convert instructions into a machine-code or 
    lower-level form so that they can be read and executed by a computer.

    Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).

    Typescript is a superset of Javascript that compiles down to Javascript. 
    Both of these do exactly what compilers do. 
    Take one language and convert into a different one!
   
    The Combo:
    In modern engines, the interpreter starts reading the code line by line while the profiler watches for frequently used code and flags then passes is to the compiler to be optimized.
    In the end, the JavaScript engine takes the bytecode the interpreter outputs and mixes in the optimized code the compiler outputs and then gives that to the computer. This is called "Just in Time" or JIT Compiler.

    Memoization:
    *Memoization is a way to cache a return value of a function based on its parameters. 
    *This makes the function that takes a long time run much faster after one execution. 
    *If the parameter changes, it will still have to reevaluate the function.

*/

