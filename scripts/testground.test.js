import { kold } from './testground';


describe('kola', () => {
    it('logs fizzbuzz if result is divisible by 15', () => {
        expect(kold(15)).toBe('fizzbuzz')
    });

});