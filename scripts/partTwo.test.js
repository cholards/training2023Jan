import { sum, fizz_buzz, fizz_buzz_total } from './partTwo';

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    });

});


describe('fizz buzz', () => {
    it('should print fizz when number is a multiple of 3', () => {
        expect(fizz_buzz(3)).toBe('fizz');
    });

    it('should print buzz when number is a multiple of 5', () => {
        expect(fizz_buzz(5)).toBe('buzz');
    });
    it('should print fizzbuzz when number is a multiple of 15', () => {
        expect(fizz_buzz(15)).toBe('fizzbuzz');
    });

    it('should print empty string when number is a not a multiple of 3, 5 or 15', () => {
        expect(fizz_buzz(77)).toBe(' ');
    });

    it('should print all fizz buzz results in a arry', () => {
        expect(fizz_buzz_total()).toBe([]);
    });

});