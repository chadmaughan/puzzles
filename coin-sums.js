var start = new Date();

var coins = [1, 2, 5, 10, 20, 50, 100, 200];
var results = [];

var answer = 200;
var result = 0;
var strResult = '';

function recurse(coin, r, s) {
    // base case
    if(r == answer) {
        return s;
    }
    else {
        for(var i = )w
    }
}

for(var c = coins.length; c > 0; c--) {
    console.log('starting with coin: ' + coins[c]);
    for(var c = coins.length; c > 0; c--) {
        var coin = coins[c];
        while(result <= answer) {
            if(result + coin <= answer) {
                result += coin;
                strResult = strResult + ' ' + coin;
                results.push(coin);
                console.log('adding ' + coin + ', result now: ' + strResult);
            }
            else {
                break;
            }
        }
    }
}

console.log('timing: ' + (new Date().getTime() - start.getTime()));