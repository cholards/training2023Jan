import { myFirstRecursive } from './testground';


test('Factorial', () => {
    expect(myFirstRecursive(5)).toBe(120);
});