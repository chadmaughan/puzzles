var number = 600851475143;
var max = 0;

var start = new Date();

console.log("The factors of " + number + " are: ");
for (var i = 2, end = Math.floor(number / 2); i <= end; i++) {
    if (number % i == 0) {
        if(i > max) {
            max = i;
        }
        console.log(i);
        number /= i;
        i -= 1;
    }
}
console.log('largest prime: ' + max);
console.log('timing: ' + (new Date().getTime() - start.getTime()));