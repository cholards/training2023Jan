import { kold } from './testground';


describe('kola', () => {
    it('logs fizzbuzz if result is divisible by 3 and 2', () => {
        expect(kold(15)).toBe('fizzbuzz')
    });
});