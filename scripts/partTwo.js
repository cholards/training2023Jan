export function sum(a, b) {
    return a + b;
}


export function fizz_buzz(num) {
    if (num % 15 === 0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return ' ';
    }
}

export function fizz_buzz_total() {
    let result = [];
    for (var i = 0; i < 101; i++) {
        result.push(fizz_buzz(i));
        console.log(i + ' is: ' + fizz_buzz(i));
        // document.getElementById('fizz_buzz').innerText = result;
    }
    return result;
}