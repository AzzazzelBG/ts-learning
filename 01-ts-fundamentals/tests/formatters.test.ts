import { describe, it, expect } from "vitest";
import { formatStock, summarizeBug } from '../src/utils/formatters';
import { AuditedBug } from "../src/types";

describe('formatStock', () => {
    it('should handle positive change', () => {
        const stock = { id: 11, symbol: "AAPL", price: 123, change: 10 };
        expect(formatStock(stock)).toBe("AAPL: $123.00 (+10%)")
    });
    it('should handle negative change', () => {
        const stock = { id: 11, symbol: "AAPL", price: 123, change: -10 };
        expect(formatStock(stock)).toBe("AAPL: $123.00 (-10%)")
    });
    it('should handle zero change', () => {
        const stock = { id: 11, symbol: "AAPL", price: 123, change: 0 };
        expect(formatStock(stock)).toBe("AAPL: $123.00 (+0%)")
    });
    it('should handle large change', () => {
        const stock = { id: 11, symbol: "AAPL", price: 123, change: 100000 };
        expect(formatStock(stock)).toBe("AAPL: $123.00 (+100000%)")
    });
});

describe('summarizeBug', () => {
    it('should handle bug with assignee', () => {
        const bug: AuditedBug = {
            id: 1234, 
            title: "Test bug", 
            severity: "high",
            assignee: "Sasho", 
            status: "in-progress",
            createdAt: "2026-04-12",
            updatedAt: "2026-04-13" 
        };
        expect(summarizeBug(bug)).toBe(`[HIGH] Test bug — in-progress (Sasho)`)
    });
    it('should handle bug without assignee', () => {
        const bug: AuditedBug = {
            id: 1234, 
            title: "Test bug", 
            severity: "high", 
            status: "in-progress",
            createdAt: "2026-04-12",
            updatedAt: "2026-04-13" 
        };
        expect(summarizeBug(bug)).toBe(`[HIGH] Test bug — in-progress (unassigned)`)
    });
    it('should handle bug with severitiy critical', () => {
        const bug: AuditedBug = {
            id: 1234, 
            title: "Test bug", 
            severity: "critical",
            assignee: "Sasho", 
            status: "in-progress",
            createdAt: "2026-04-12",
            updatedAt: "2026-04-13" 
        };
        expect(summarizeBug(bug)).toBe(`[CRITICAL] Test bug — in-progress (Sasho)`)
    });
    it('should handle bug with severitiy low', () => {
        const bug: AuditedBug = {
            id: 1234, 
            title: "Test bug", 
            severity: "low",
            assignee: "Sasho", 
            status: "in-progress",
            createdAt: "2026-04-12",
            updatedAt: "2026-04-13" 
        };
        expect(summarizeBug(bug)).toBe(`[LOW] Test bug — in-progress (Sasho)`)
    });
    it('should handle bug with severitiy medium', () => {
        const bug: AuditedBug = {
            id: 1234, 
            title: "Test bug", 
            severity: "medium",
            assignee: "Sasho", 
            status: "in-progress",
            createdAt: "2026-04-12",
            updatedAt: "2026-04-13" 
        };
        expect(summarizeBug(bug)).toBe(`[MEDIUM] Test bug — in-progress (Sasho)`)
    })
});