import { addTask, listTasks, completeTask, deleteTask } from './services/task-service.js';
import type { NewTaskInput, TaskPriority } from './types/task.js';

async function main(): Promise<void> {
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
        case "add":
            const title = args[1];
            const priorityIndex = args.indexOf("--priority");
            const priority: TaskPriority = priorityIndex !== -1 ? (args[priorityIndex + 1] as TaskPriority) : "medium";
            const addingTask: NewTaskInput = { title: title, priority: priority };
            const addedTask = await addTask(addingTask);
            console.table(addedTask);
            break;

        case "list":
            const listingTasks = await listTasks();
            console.table(listingTasks, ["id", "title", "status", "priority"]);
            break;

        case "complete":
            const id = parseInt(args[1], 10);
            if (isNaN(id)) {
                console.log("❌ Invalid id");
                return;
            }
            const complitingTask = await completeTask(id);
            if (!complitingTask) {
                console.log(`❌ Task with id ${id} not found`)
                return;
            }
            console.log(`✅ Task "${complitingTask.title}" marked as done`);
            break;

        case "delete":
            const delId = parseInt(args[1], 10);
            if (isNaN(delId)) {
                console.log("❌ Invalid id");
                return;
            }
            const deletingTask = await deleteTask(delId);
            if (!deletingTask) {
                console.log(`❌ Task with id ${delId} not found`)
                return;
            }
            console.log(`✂️ Task "${deletingTask.title}" successfully deleted.`);
            break;

        default:
            console.log("Usage: <command> [args]");
            console.log("Commands: add, list, complete, delete");
            break;
    }
}

main();