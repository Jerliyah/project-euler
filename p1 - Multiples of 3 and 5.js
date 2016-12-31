
/*
============================
    Problem #1
    Multiples of 3 and 5
============================
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
See with console at repl.it
https://repl.it/Eyrg/1
*/

var n = 1000;
var sum = 0;


function findMultiples(num) {
    for(var i=0; i < n; i++) {
        if (i % num === 0) {
            sum += i;
        }
    }

    return('Sum of whole numbers between 0 and ' + n + ', that are a multiple of 3 and/or 5: ' + sum);
}

findMultiples(3);
findMultiples(5);
