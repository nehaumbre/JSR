function addTo80(n) {
    console.log('long time...')
    return n + 80
}

addTo80(5);
addTo80(5);
addTo80(5);
// Bad way

function memoizedoAddto80(){
    let cache ={}
    return function(n){ //closure to access cached object
        if (n in cache){
            return cache[n]
        }else{
            console.log('first..')
            cache[n] = n + 80
            return cache[n] 
        }
    }
}

const memoized = memoizedoAddto80()
console.log('1', memoized(5))
console.log('2', memoized(5))
console.log('3', memoized(5))
console.log('4', memoized(20))