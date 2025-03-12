function createCircularReference() {
    let objA = {};
    let objB = {};

    objA.ref = objB;
    objB.ref = objA;
    return objA; // Both objects remain in memory
}

createCircularReference();
// since both objA and objB reference eachother
//  their reference count never reach zero causing a memory leak
//use mark and sweep to avoid circular references