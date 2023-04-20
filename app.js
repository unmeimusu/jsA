// Two Ways of Thinking
// #1 Iterative Thinking which is faster
function pow(x,n) {
    let result = 1

    for (let i=0;i < n; i++) {
        result *= x;
    }
    
    return result
}
document.write(pow("pow: ",2,3))
// #2 Recursive Thinking slower
function powR(x,n) {
    if ( n == 1 ) {
        return x;
    } else {
        return x * powR( x, n-1 )  // 2 * 4
    }
}
document.write(powR("powR: ",2,3))