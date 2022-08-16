import { isThisTypeNode } from "typescript";
import { isPositive } from "./04-main";

describe('isPositive()', () => {
    it('should return true when n > 0', () => {
        expect(isPositive(1)).toBe(true);
        expect(isPositive(2)).toBe(true);
        expect(isPositive(3)).toBe(true);
    });

    it('Should return false when n = 0', () => {
        expect(isPositive(0)).toBe(false);
    } )
});