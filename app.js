// Two Ways of Thinking
// #1 Iterative Thinking, faster and more efficient
function pow(x,n) {
    let result = 1

    for (let i=0;i < n; i++) {
        result *= x;
    }
    
    return result
}

document.write("Pow: ",pow(2,3))
// #2 Recursive Thinking
function powR(x,n) {
    if ( n == 1 ) {
        return x;
    } else {
        return x * powR( x, n-1 )  // 2 * 4
    }
}
document.write("<br>powR: "+powR(2,3))

function printSc(sc) {
    console.log(sc)
}
printSc("Hello")