import { describe, it, expect } from "vitest";
import { isStock } from '../src/exercise5';

describe('isStock', () => {
    it('should return true for valid Stock object', () => {
        const validStock: unknown = { symbol: "AAPL", price: 178, change: 1.5 };
        expect(isStock(validStock)).toBeTruthy();
    });
    it('should return false for null value', () => {
        expect(isStock(null)).toBeFalsy();
    });
    it('should return false for a string value', () => {
        const stringStock = "symbol: AAPL, price: 178, change: 1.5";
        expect(isStock(stringStock)).toBeFalsy();
    });
    it('should return false for an object with missing symbol', () => {
        const missingSymbol: unknown = { price: 178, change: 1.5 };
        expect(isStock(missingSymbol)).toBeFalsy();
    });
    it('should return false for an object missing price', () => {
        const missingPrice: unknown = { symbol: "AAPL",  change: 1.5 };
        expect(isStock(missingPrice)).toBeFalsy();
    })
});

