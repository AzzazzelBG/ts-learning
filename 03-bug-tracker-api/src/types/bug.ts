export type BugSeverity = "low" | "medium" | "high" | "critical";
export type BugStatus = "open" | "in-progress" | "closed";

export interface Bug {
    id: number,
    title: string,
    severity: BugSeverity,
    status: BugStatus,
    assignee?: string,
    createdAt: string,
    updatedAt: string
}