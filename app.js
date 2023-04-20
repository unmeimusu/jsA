// Two Ways of Thinking
// #1 Iterative Thinking which is faster
function pow(x,n) {
    let result = 1

    for (let i=0;i < n; i++) {
        result *= x;
    }
    
    return result
}
document.write(pow(2,3))
// #2 Recursive Thinking slower
function pow(x,n) {
    if ( n == 1 ) {
        return x;
    } else {
        return x * pow( x, n-1 )  // 2 * 4
    }
}
