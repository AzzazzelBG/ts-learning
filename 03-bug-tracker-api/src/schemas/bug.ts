import { z } from "zod";

export const CreateBugSchema = z.object({
    title: z.string().min(1),
    severity: z.enum(["low", "medium", "high", "critical"]),
    assignee: z.string().min(2).optional()
});

export const UpdateBugSchema = CreateBugSchema.partial();

export type CreateBugInput = z.infer<typeof CreateBugSchema>;
export type UpdateBugInput = z.infer<typeof UpdateBugSchema>;
