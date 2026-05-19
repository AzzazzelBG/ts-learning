import { describe, it, expect } from "vitest";
import { StockResponseSchema } from "../src/schemas/stock";
import { BugSchema } from "../src/schemas/bug";
import { validateTask } from "../src/schemas/task";
import { createBug, createStock } from "../src/test-helpters/factories";

describe('Validate Stock schemas', () => {
    it('should valid stock pass the validation', () => {
        const googData = [createStock()];
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
        const validBug = BugSchema.safeParse(createBug());
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
});

describe('Validate Task schemas', () => {
    it('should pass with valid task data', () => {
        const result = validateTask({ id: 333, title: "Test task", status: "pending", priority: "high", createdAt: 2026 });
        expect(result.success).toBe(true);
    });
    it('should fail with invalid priority', () => {
        const result = validateTask({ id: 333, title: "Test task", status: "pending", priority: "long", createdAt: 2026 });
        expect(result.success).toBe(false);
    });
    it('should fail with wrong data type', () => {
        const result = validateTask({ id: 333, title: "Test task", status: "pending", priority: "high", createdAt: "2026" });
        expect(result.success).toBe(false);
    });
})