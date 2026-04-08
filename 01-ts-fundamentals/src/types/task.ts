export type TaskStatus = "pending" | "done";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
    readonly id: number;
    title: string;
    priority: TaskPriority;
    createdAt: Date
};

export type NewTaskInput = Pick<Task, "title" | "priority">;