import { describe, it, expect } from "vitest";
import { StockResponseSchema } from "../src/schemas/stock";
import { BugSchema } from "../src/schemas/bug";

describe('Validate Stock schemas', () => {
    it('should valid stock pass the validation', () => {
        const googData = [{ id: 2, symbol: "AAPL", price: 111, change: 10 }];
        const result = StockResponseSchema.safeParse(googData);
        expect(result.success).toBeTruthy();
    });
    it('should fail validation for missing symbol', () => {
        const missingSymbol = [{ id: 2, price: 111, change: 10 }];
        const result = StockResponseSchema.safeParse(missingSymbol);
        expect(result.success).toBeFalsy();
    });
    it('should fail if data type does not match', () => {
        const wrongDataType = [{ id: 2, symbol: "AAPL", price: "111", change: 10 }];
        const result = StockResponseSchema.safeParse(wrongDataType);
        expect(result.success).toBeFalsy();
    });
});

describe('Validate Bug schemas', () => {
    it('should valid bug pass validation', () => {
        const validBug = BugSchema.safeParse({ id: 22, title: "Test test", severity: "medium", assignee: "Sasho", status: "open" });
        expect(validBug.success).toBe(true);
    });
    it('should fail with empty title', () => {
        const emptyTitle = BugSchema.safeParse({ id: 22, title: "", severity: "medium", assignee: "Sasho", status: "open" });
        expect(emptyTitle.success).toBe(false);
    });
    it('should fail with invalid severity', () => {
        const invalidSeverity = BugSchema.safeParse({ id: 22, title: "Test test", severity: "urgent", assignee: "Sasho", status: "open" });
        expect(invalidSeverity.success).toBe(false);
    })
})