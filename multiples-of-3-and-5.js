var x = 100000000;

// trial division solution
var start = new Date();

var sum = 0;
for(var i = 0; i < x; i++) {
    if((i % 3 == 0) || i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);
console.log('trial division time: ' + (new Date().getTime() - start.getTime()));


// no division solution
start = new Date();

var max = x - 1;
function sumDivisibleBy(n) {
    var c = Math.floor(max / n);
    return n * (c * (c + 1)) / 2;
}
console.log(sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15));
console.log('no division time: ' + (new Date().getTime() - start.getTime()));


// arithmetic progression solution
start = new Date();

var r1 = (3/2) * Math.floor((x - 1)/3) * Math.floor((x + 2)/3)
var r2 = (5/2) * Math.floor((x - 1)/5) * Math.floor((x + 4)/5)
var r3 = (15/2) * Math.floor((x - 1)/15) * Math.floor((x + 14)/15)

console.log(r1 + r2 - r3);
console.log('arithmetic progression time: ' + (new Date().getTime() - start.getTime()));

//    In general, a+(n-1)d = x, gives n = int((x-a)/d+1).
//
//    But for this problem we can improve even further, as a=d we get n = int(x/d-d/d+1) = int(x/d).
//
//    The nth (last) term, l = a+(n-1)d = d+(int(x/d)-1)*d = d*int(x/d).
//
//    Combining this to find the sum, S = (n/2)(a+l) = (int(x/d)/2) * (d+d*int(x/d)).
//
//    Simplifying, S = d * int(x/d) * (1+int(x/d))/2.
