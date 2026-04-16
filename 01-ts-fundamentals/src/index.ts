import { addTask, listTasks, completeTask, deleteTask } from './services/task-service.js';
import type { TaskPriority } from './types/task.js';

async function main(): Promise<void> {
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
        case "add":
            const title = args[1];
            const priorityIndex = args.indexOf("--priority");
            const priority: TaskPriority = priorityIndex !== -1 ? (args[priorityIndex + 1] as TaskPriority) : "medium";
            break;
        case "list":

            break;

        case "complete":

            break;

        case "delete":

            break;

        default:
            console.log("Usage: <command> [args]");
            console.log("Commands: add, list, complete, delete");
            break;
    }
}

main();