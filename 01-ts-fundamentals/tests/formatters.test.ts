import { describe, it, expect } from "vitest";
import { formatStock, summarizeBug } from '../src/utils/formatters';
import { AuditedBug } from "../src/types";
import { createBug, createStock, createTask } from "../src/test-helpters/factories";

describe('formatStock', () => {
    it('should handle positive change', () => {
        const stock = createStock({ change: 10 });
        expect(formatStock(stock)).toBe("TST Symbol: $100.00 (+10%)")
    });
    it('should handle negative change', () => {
        const stock = createStock({ change: -10 });
        expect(formatStock(stock)).toBe("TST Symbol: $100.00 (-10%)")
    });
    it('should handle zero change', () => {
        const stock = createStock();
        expect(formatStock(stock)).toBe("TST Symbol: $100.00 (+0%)")
    });
    it('should handle large change', () => {
        const stock = createStock({ change: 100000 });
        expect(formatStock(stock)).toBe("TST Symbol: $100.00 (+100000%)")
    });
});

describe('summarizeBug', () => {
    it('should handle bug with assignee', () => {
        const bug = createBug({ assignee: "Sasho" });
        expect(summarizeBug(bug)).toBe(`[MEDIUM] Default title — in-progress (Sasho)`)
    });
    it('should handle bug without assignee', () => {
        const bug = createBug();
        expect(summarizeBug(bug)).toBe(`[MEDIUM] Default title — in-progress (unassigned)`)
    });
    it('should handle bug with severitiy critical', () => {
        const bug = createBug({ severity: "critical" })
        expect(summarizeBug(bug)).toBe(`[CRITICAL] Default title — in-progress (unassigned)`)
    });
    it('should handle bug with severitiy low', () => {
        const bug = createBug({
            severity: "low",
            assignee: "Sasho"
        });
        expect(summarizeBug(bug)).toBe(`[LOW] Default title — in-progress (Sasho)`)
    });
    it('should handle bug with severitiy medium', () => {
        const bug = createBug({ assignee: "Sasho" });
        expect(summarizeBug(bug)).toBe(`[MEDIUM] Default title — in-progress (Sasho)`)
    })
});