import { test, expect } from "@playwright/test";
import { TodoPage } from "../src/todo-page.js";

// ============================================
// Playwright QA Automation — Test Exercises
// ============================================
// Complete the TODOs in both this file AND src/todo-page.ts
// Run with: npm test (headless) or npm run test:headed (see the browser)

test.describe("TodoMVC App", () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  // ─── TEST 1: Add a single todo ──────────────────────────
  test("should add a new todo", async () => {
    await todoPage.addTodo("Learn TypeScript");

    const count = await todoPage.getTodoCount();
    expect(count).toBe(1);
    await expect(todoPage.page.getByText("Learn TypeScript")).toBeVisible();
  });

  // ─── TEST 2: Add multiple todos ─────────────────────────
  test("should add multiple todos", async () => {
    const todos = ["Learn TypeScript", "Write Playwright tests", "Build an app"];

    for (const todo of todos) {
      await todoPage.addTodo(todo);
    }

    const count = await todoPage.getTodoCount();
    expect(count).toBe(todos.length);

    for (const todo of todos) {
      await expect(todoPage.page.getByText(todo)).toBeVisible();
    }
  });

  // ─── TEST 3: Complete a todo ────────────────────────────
  test("should complete a todo", async () => {
    await todoPage.addTodo("Learn TypeScript");
    await todoPage.addTodo("Practice generics");

    await todoPage.completeTodo("Learn TypeScript");

    const item = todoPage.page.getByText("Learn TypeScript").locator("..");
    await expect(item).toHaveClass(/completed/);
  });

  // ─── TEST 4: Delete a todo ──────────────────────────────
  test("should delete a todo", async () => {
    await todoPage.addTodo("Learn TypeScript");
    await todoPage.addTodo("Delete me");

    await todoPage.deleteTodo("Delete me");

    const count = await todoPage.getTodoCount();
    expect(count).toBe(1);
    await expect(todoPage.page.getByText("Delete me")).not.toBeVisible();
  });

  // ─── TEST 5: Filter todos ──────────────────────────────
  test("should filter active and completed todos", async () => {
    await todoPage.addTodo("Active task");
    await todoPage.addTodo("Completed task");
    await todoPage.completeTodo("Completed task");
    
    await todoPage.filterBy("Active");
    await expect(todoPage.page.getByText("Active task")).toBeVisible();
    await expect(todoPage.page.getByText("Completed task")).not.toBeVisible();
    
    await todoPage.filterBy("Completed");
    await expect(todoPage.page.getByText("Completed task")).toBeVisible();
    await expect(todoPage.page.getByText("Active task")).not.toBeVisible();
    
    await todoPage.filterBy("All");
    await expect(todoPage.page.getByText("Active task")).toBeVisible();
    await expect(todoPage.page.getByText("Completed task")).toBeVisible();
  });

  // ─── TEST 6: (Stretch) Write your own test ─────────────
  // TODO: Think of an edge case and write a test for it
  // Ideas: empty todo, very long text, special characters,
  //        complete all then clear completed, etc.
});
