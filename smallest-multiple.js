var start = new Date();

for(var a = 20; a < Number.MAX_VALUE; a++) {
    var multiple = true;
    for(var b = 1; b <= 20; b++) {
        if(a % b != 0) {
            multiple = false;
            break;
        }
    }

    if(multiple) {
        console.log(a);
        break;
    }
}
console.log('timing: ' + (new Date().getTime() - start.getTime()));