function isPalindrome(number) {
	var s = '' + number;
	for(var i = 0; i < s.length / 2; i++) {
		if(s[i] !== s[(s.length - 1) - i]) {
			return false;
		}
	}
	return true;
}

var start = new Date();
var max = 0;

for(var a = 999; a > 99; a--) {
    for(var b = 999; b > 99; b--) {

        // prevent checking everything twice, i.e. (a * b) and (b * a)
        if(a <= b) {
            var result = a * b;

            // only check for palindrome if it is bigger than the max currently found
            if(result > max) {
                if(isPalindrome(result)) {
                    max = result;
                }
            }
        }
    }
}
console.log(max);
console.log('timing (my solution): ' + (new Date().getTime() - start.getTime()));