import prisma from "../db.js";
import { Bug } from "../types/bug.js";
import { CreateBugInput, UpdateBugInput } from "../schemas/bug.js";

// 1. Return all bugs
export async function getAllBugs() {
    return await prisma.bug.findMany();
}

// 2. Find one bug by id
export async function getBugById(id: number) {
    return await prisma.bug.findUnique({
        where: { id },
    });
}

// 3. Create a new bug from validated input
export async function createBug(input: CreateBugInput) {
    return await prisma.bug.create({
        data: {
            title: input.title,
            severity: input.severity,
            assignee: input.assignee
        },
    });
}

// 4. Update an existing bug with partial data
export async function updateBug(id: number, input: UpdateBugInput) {
    try {
        return await prisma.bug.update({
            where: { id },
            data: input,
        });
    } catch {
        return undefined;
    }
}

// 5. Delete a bug and return it
export async function deleteBug(id: number) {
    try {
        return await prisma.bug.delete({
            where: { id },
        });
    } catch {
        return undefined;
    }
}