var x = 100;

// trial division solution
var start = new Date();

for(var i = 0; i < x; i++) {
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log('fizzbuzz');
    }
    else if(i % 3 == 0) {
        console.log('fizz');
    }
    else if (i % 5 == 0) {
        console.log('buzz');
    }
    else {
        console.log(i);
    }
}

console.log('trial division time: ' + (new Date().getTime() - start.getTime()));


// more memory, less division (63% faster)
var start = new Date();

for(var i = 0; i < x; i++) {

    var three = (i % 3 == 0);
    var five = (i % 5 == 0);

    if(three && five) {
        console.log('fizzbuzz');
    }
    else if(three) {
        console.log('fizz');
    }
    else if (five) {
        console.log('buzz');
    }
    else {
        console.log(i);
    }
}

console.log('less division time: ' + (new Date().getTime() - start.getTime()));
