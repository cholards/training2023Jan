// function counctDown(x) {
//     if (x === 0) {
//         return
//     }
//     console.log(x)
//     counctDown(x - 1)
// }
// counctDown(20);

// function factorial(num) {
//     // The factorial of 5 = 5*4*3*2*1 
//     if (num === 0) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }

// }

// console.log(factorial(5));

function fibonacci(num) {
    // sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    // let num1 = 0
    // let num2 = 1
    // let sum
    // let i = 0

    // for (let i = 0; i < num; i++) {
    //     sum = num1 + num2;
    //     num1 = num2
    //     num2 = sum
    // }
    // return num2;
}

// Given a string str and two characters X and Y, the task is to write a recursive function to replace all occurrences of character X with character Y.
// Input: str = abacd, X = a, Y = x 
// Output: xbxcd

// Input: str = abacd, X = e, Y = y 
// Output: abacd

function replaceChar(str, c1, c2) {
    if (str.length === 1) return str;
    let frontChar = str.charAt(0);
    if (str.charAt(0) === c1) {
        frontChar = c2;
        str = c2 + str.substring(1);
    }
    return frontChar + replaceChar(str.substring(1), c1, c2)
}


let word = "koladeadelaiye/Desktop/Nneka/scripts/testground"
let X = "a"
let Y = "x"

console.log(replaceChar(word, X, Y))