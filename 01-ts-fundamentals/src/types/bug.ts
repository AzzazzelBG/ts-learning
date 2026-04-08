export interface Bug {
    readonly id: number;
    title: string;
    severity: Severity;
    assignee?: string;
    status: Status;
};

export interface AuditedBug extends Bug {
    createdAt: string;
    updatedAt: string;
    closedBy?: string;
};

export type Severity = "low" | "medium" | "high" | "critical";

export type Status = "open" | "in-progress" | "closed";