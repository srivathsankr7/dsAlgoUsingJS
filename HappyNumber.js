/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let numbers = new Set();
    while(!numbers.has(n)) {
        numbers.add(n);
        n = squareSum(n);
        if(n === 1) {
            return true;
        }
    }
    return false;
};

let squareSum = function(n) {
    let digits = n;
    let squareSum = 0;
    while(digits !== 0) {
        var mod = digits % 10;
        squareSum += mod * mod;
        digits = Math.trunc(digits/10);
    }
    return squareSum;
}

console.log(isHappy(19));

//const numToArray = num => `${num}`.split('').map(n => +n);