// Task A: Create a Bug interface with:

// id: readonly number
// title: string
// severity: literal type — "low" | "medium" | "high" | "critical"
// assignee: optional string
// status: literal type — "open" | "in-progress" | "closed"

interface Bug {
    readonly id: number;
    title: string;
    severity: Severity;
    assignee?: string;
    status: Status;
};

type Severity = "low" | "medium" | "high" | "critical";
type Status = "open" | "in-progress" | "closed";

// Task B: Create an AuditedBug interface that extends Bug and adds:

// createdAt: string
// updatedAt: string
// closedBy: optional string

interface AuditedBug extends Bug {
    createdAt: string;
    updatedAt: string;
    closedBy?: string;
};

// Task C: Create a BugCountMap interface using an index signature where keys are severity levels (string) and values are numbers. 
// Then create a variable with counts like { low: 3, high: 1 }.

type BugCountMap = Partial<Record<Severity, number>>;

const practice: BugCountMap = {
    "low": 3,
    "high": 1
};
// Task D: Write a function summarizeBug that takes an AuditedBug and returns a string like: "[CRITICAL] 
// Login page crash — open (assigned to Bruce Wayne)"

// If no assignee, show "unassigned" instead

function summarizeBug(bug: AuditedBug): string {
    const owner = bug.assignee ?? "unassigned";
    return `[${bug.severity.toUpperCase()}] ${bug.title} — ${bug.status} (${owner})`;
};

//Task: Create an array of 2–3 AuditedBug objects and log each one using summarizeBug. 
// Make sure at least one has no assignee and one has closedBy set.
//Then try this — what happens if you write:
// const bug: AuditedBug = { id: 1, title: "Test", severity: "low", status: "open", createdAt: "", updatedAt: "" };
//bug.id = 99;

const releaseIssues: AuditedBug[] = [
    {
        id: 1, title: 'First bug', severity: "high", assignee: "Bai Ivan", status: "in-progress", "createdAt": "today", "updatedAt": "now"
    },
    {
        id: 3, title: 'Second bug', severity: "low", status: "open", createdAt: "yesterday", updatedAt: "now"
    },
    {
        id: 6, title: 'Third bug', severity: "critical", assignee: "Pesho Prostiq", status: "closed", createdAt: "2026-03-12", updatedAt: "now", closedBy: "Pesho"
    }
];

const bug: AuditedBug = { id: 1, title: "Test", severity: "low", status: "open", createdAt: "", updatedAt: "" };

releaseIssues.forEach(bug => console.log(summarizeBug(bug)));
