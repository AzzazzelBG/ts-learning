import { Bug } from "../types/bug.js";
import { CreateBugInput, UpdateBugInput } from "../schemas/bug.js";

// In-memory storage — acts as your database
const bugs: Bug[] = [];
let nextId = 1;

// 1. Return all bugs
export function getAllBugs(): Bug[] {
    return bugs;
}

// 2. Find one bug by id
export function getBugById(id: number): Bug | undefined {
    return bugs.find(b => b.id === id);
}

// 3. Create a new bug from validated input
export function createBug(input: CreateBugInput): Bug {
    const newBug: Bug = {
        id: nextId++,
        title: input.title,
        severity: input.severity,
        assignee: input.assignee,
        status: "open",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    bugs.push(newBug);
    return newBug;
}

// 4. Update an existing bug with partial data
export function updateBug(id: number, input: UpdateBugInput): Bug | undefined {
    const index = bugs.findIndex(b => b.id === id);
    if (index === -1) return undefined;

    // Spread: keep existing fields, overwrite with input, refresh timestamp
    bugs[index] = {
        ...bugs[index],
        ...input,
        updatedAt: new Date().toISOString(),
    };
    return bugs[index];
}

// 5. Delete a bug and return it
export function deleteBug(id: number): Bug | undefined {
    const index = bugs.findIndex(b => b.id === id);
    if (index === -1) return undefined;

    // splice removes 1 item at index and returns it in an array
    const [deleted] = bugs.splice(index, 1);
    return deleted;
}