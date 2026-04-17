import { NewTaskInput, Task } from "../types/task.js";
import { readData, writeData } from "../utils/file.js";

const FILE_PATH = "data/tasks.json";

export async function addTask(input: NewTaskInput): Promise<Task> {
    const tasks = await readData<Task[]>(FILE_PATH, []);

    const newTask: Task = {
        id: Math.floor(Math.random() * 9999),
        title: input.title,
        status: "pending",
        priority: input.priority,
        createdAt: Date.now(),
    };

    tasks.push(newTask);
    await writeData(FILE_PATH, tasks);

    return newTask;
}

export async function listTasks(): Promise<Task[]> {
    return await readData(FILE_PATH, []);

}

export async function completeTask(id: number): Promise<Task | undefined> {
    const tasks = await readData<Task[]>(FILE_PATH, []);
    const task = tasks.find(t => t.id === id);

    if (!task) return undefined;

    task.status = "done";
    await writeData(FILE_PATH, tasks);
    return task;
}

export async function deleteTask(id: number): Promise<Task | undefined> {
    const tasks = await readData<Task[]>(FILE_PATH, []);
    const task = tasks.find(t => t.id === id);

    if (!task) return undefined;

    const remaining = tasks.filter(t => t.id !== id);
    await writeData(FILE_PATH, remaining);
    return task;
}