var max = 40000;

// my solution
var start = new Date();

var current = 1; // a
var next = 1; // b

var fib = 0; // h
var sum = 0;

while(fib < max) {
    fib = current + next;
    if(fib % 2 == 0) {
        sum = sum + fib;
    }
    current = next;
    next = fib;
}
console.log(sum);
console.log('timing: ' + (new Date().getTime() - start.getTime()));


// every third fibonacci number
//    1   1   2   3  5  8 13 21 34 55 89 144
//    a   b   c   a  b  c  a  b  c  a  b   c
var start = new Date();

var a = 1;
var b = 1;
var c = a + b;          // extra variable to store third

var sum = 0;
while(c < max) {
    sum += c;      // add the third fibonacci to the sum
    a = b + c;
    b = a + c;
    c = a + b;
}
console.log(sum);
console.log('timing: ' + (new Date().getTime() - start.getTime()));


// TODO recursive solution
var sum = 0;
function recurse(n) {
    // base case
    if(n < 0) {
        return sum;
    }
    return 4 * recurse(n - 3) + recurse(n - 6);
}
//console.log(recurse(max));