import { z } from "zod";

export const SeveritySchema = z.enum(["low", "medium", "high", "critical"]);

export const BugSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    severity: SeveritySchema,
    assignee: z.string().optional(),
    status: z.enum(["open", "in-progress", "closed"])
});

export const AuditedBugSchema = BugSchema.extend({
    createdAt: z.string(),
    updatedAd: z.string(),
    closedBy: z.string().optional()
});