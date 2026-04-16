export type TaskStatus = "pending" | "done";

export type TaskPriority = "low" | "medium" | "high";
export interface Task {
    readonly id: number;
    title: string;
    status?: TaskStatus;
    priority: TaskPriority;
    createdAt: number;
};

export type NewTaskInput = Pick<Task, "title" | "priority">;