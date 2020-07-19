// -  Create a function called `factorio`
//    that returns it's input's factorial
'use strict';

function factorio(x) {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        return x * factorio(x - 1);
    }
}
console.log(factorio(3));