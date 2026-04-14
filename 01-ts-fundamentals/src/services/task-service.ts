import { NewTaskInput, Task } from "../types/task.js";
import { readData, writeData } from "../utils/file.js";

const FILE_PATH = "data/tasks.json";

export async function addTask(input: NewTaskInput): Promise<Task> {
    const newTask = {
        id: Math.floor(Math.random() * 9999),
        title: input.title,
        priority: input.priority,
        createdAt: Date.now()
    };

    await writeData(FILE_PATH, newTask);

    return newTask;
}

export async function listTasks(): Promise<Task[]> {
    return await readData(FILE_PATH, []);

}

export async function completeTask(id: number): Promise<Task | undefined> {
    return undefined;
}