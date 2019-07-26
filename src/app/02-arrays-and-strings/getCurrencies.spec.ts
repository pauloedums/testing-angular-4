import { getCurrencies } from "./getCurrencies";

describe('Get Currencies', () => {
    it('should return the currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
});