import { kold } from './testground';


describe('kola', () => {
    it('logs fizzbuzz if result is divisible by 15', () => {
        expect(kold(15)).toBe('fizzbuzz')
    });
    it('logs fizz if result is divisible by 3', () => {
        expect(kold(3)).toBe('fizz')
    });

});