import { Stock, AuditedBug, Task } from "../types/index.js";

let bugIdIndex = 1;
let stockIdIndex = 1;
let taskIdIndex = 1;

export function createBug(overrides: Partial<AuditedBug> = {}): AuditedBug {
    return {
        id: bugIdIndex++,
        title: "Default title",
        severity: "medium",
        status: "in-progress",
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
        ...overrides
    }
};

export function createStock(overrides: Partial<Stock> = {}): Stock {
    return {
        id: stockIdIndex++,
        symbol: "TST Symbol",
        price: 100,
        change: 0,
        ...overrides
    }
};

export function createTask(overrides: Partial<Task> = {}): Task {
    return {
        id: taskIdIndex++,
        title: "Test title",
        status: "pending",
        priority: "medium",
        createdAt: Date.now(),
        ...overrides
    }
};

