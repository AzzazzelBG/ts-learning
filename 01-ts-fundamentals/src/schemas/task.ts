import { z } from "zod";
import { Task } from "../types/task.js";

const TaskStatusSchema = z.enum(["pending", "done"]);
const TaskPrioritySchema = z.enum(["low", "medium", "high"]);

export const TaskSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    status: TaskStatusSchema,
    priority: TaskPrioritySchema,
    createdAt: z.number()
});

type ValidateResult =
    | { success: true; data: Task }
    | { success: false; error: string };

export function validateTask(data: unknown): ValidateResult {
    const result = TaskSchema.safeParse(data);
    if (result.success) {
        return { success: true, data: result.data };
    }
    return { success: false, error: result.error.message };
}