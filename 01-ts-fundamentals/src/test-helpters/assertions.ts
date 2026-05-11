import { expect } from "vitest";
import { z } from "zod";
import { Task } from "../types/index.js";

export function expectValidSchema<T>(schema: z.ZodType<T>, data: unknown): T {
    const result = schema.safeParse(data);
    if (!result.success) {
        throw new Error(`Schema failed validation:\n${result.error.issues.map(i => `  - ${i.path.join(".")}: ${i.message}`).join("\n")}`);
    }
    return result.data;
}

export function expectTaskComplete(task: Task): void {
    expect(task.status).toBe("done");
}

export function expectTaskPending(task: Task): void {
    expect(task.status).toBe("pending");
}