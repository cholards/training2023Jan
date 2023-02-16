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

// function fibonacci(num) {
//     // sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//     // let num1 = 0
//     // let num2 = 1
//     // let sum
//     // let i = 0

//     // for (let i = 0; i < num; i++) {
//     //     sum = num1 + num2;
//     //     num1 = num2
//     //     num2 = sum
//     // }
//     // return num2;
// }

// Given a string str and two characters X and Y, the task is to write a recursive function to replace all occurrences of character X with character Y.
// Input: str = abacd, X = a, Y = x 
// Output: xbxcd

// Input: str = abacd, X = e, Y = y 
// Output: abacd


console.log(myFirstRecursive(5))

export function myFirstRecursive(num) {

    if (num < 0) { return; }

    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * myFirstRecursive(num - 1);
    }
};


export function fibonacciSequence(number) {
    if (number === 1 || number === 0) { return 1 };

    let current = fibonacciSequence(number - 1) + fibonacciSequence(number - 2)

    return current
}

console.log(fibonacciSequence(5))