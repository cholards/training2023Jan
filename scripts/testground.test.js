import { myFirstRecursive, fibonacciSequence } from './testground';


test('Factorial', () => {
    expect(myFirstRecursive(5)).toBe(120);
});

test('fibonacci Sequence of numbers', () => {
    expect(fibonacciSequence(5)).toBe(8);
    expect(fibonacciSequence(10)).toBe(89);
})