// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
'use strict';

function printParams(...args) {
    return args;
};

console.log(printParams('cat', 'dog'));