/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1; 
    let b = 2; 

    for ( let i = 0; i < n - 2; i++){
    let c = a + b;
    a = b;
        b = c;
    }
        return b;

};