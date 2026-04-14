import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

export async function readData<T>(filePath: string, fallback: T): Promise<T> {
    try {
        const raw = await readFile(filePath, "utf-8");
        return JSON.parse(raw) as T;
    } catch (error) {
        return fallback;
    }
}

export async function writeData<T>(filePath: string, data: T): Promise<void> {
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}