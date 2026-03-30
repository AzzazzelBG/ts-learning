import { AuditedBug, Severity, summarizeBug } from "./exercise2.js";

// Task A: Write a function calculateChange that takes currentPrice: number and previousPrice: number, and returns the percentage change as a number. Add explicit return type.
// Example: calculateChange(110, 100) → 10
// Example: calculateChange(90, 100) → -10
function calculateChange(currentPrice: number, previousPrice: number): number {
    return ((currentPrice - previousPrice) / previousPrice) * 100;
};

// Task B: Write a function createBugReport that takes:

// title: string (required)
// severity: your Severity type (default: "medium")
// assignee: optional string

// It should return an AuditedBug (import or redefine your types from exercise2). Use Date.now() for the id and new Date().toISOString() for dates.

function createBugReport(title: string, severity: Severity = "medium", assignee?: string): AuditedBug {
    return {
        id: Date.now(),
        title: title,
        severity,
        status: "open",
        assignee,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
}

// Task C: Write a function processInput that accepts input: string | number | boolean and returns:

// If string → the string uppercased
// If number → the number doubled
// If boolean → "yes" or "no"

// Add an explicit return type of string.

function processInput(input: string | number | boolean): string {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        const returnValue = input * 2;
        return `${returnValue}`;
    } else {
        return input ? "Yes" : "No"
    }
};
// Task D: Write a logBugReport function that takes an AuditedBug, logs it with summarizeBug (reuse or rewrite your function from exercise2), and returns void.


function logBugReport(input: AuditedBug): void {
    console.log(summarizeBug(input));
};
