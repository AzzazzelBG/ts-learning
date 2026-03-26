// Task A: Create a Bug interface with:

// id: readonly number
// title: string
// severity: literal type — "low" | "medium" | "high" | "critical"
// assignee: optional string
// status: literal type — "open" | "in-progress" | "closed"

// Task B: Create an AuditedBug interface that extends Bug and adds:

// createdAt: string
// updatedAt: string
// closedBy: optional string

// Task C: Create a BugCountMap interface using an index signature where keys are severity levels (string) and values are numbers. Then create a variable with counts like { low: 3, high: 1 }.
// Task D: Write a function summarizeBug that takes an AuditedBug and returns a string like: "[CRITICAL] Login page crash — open (assigned to Bruce Wayne)"

// If no assignee, show "unassigned" instead