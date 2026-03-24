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

    // TODO: Assert that the todo count is 1
    // TODO: Assert that the todo text is visible on the page
  });

  // ─── TEST 2: Add multiple todos ─────────────────────────
  test("should add multiple todos", async () => {
    const todos = ["Learn TypeScript", "Write Playwright tests", "Build an app"];

    // TODO: Add all todos using a loop
    // TODO: Assert the count matches the array length
    // TODO: Assert each todo text is visible
  });

  // ─── TEST 3: Complete a todo ────────────────────────────
  test("should complete a todo", async () => {
    await todoPage.addTodo("Learn TypeScript");
    await todoPage.addTodo("Practice generics");

    // TODO: Complete "Learn TypeScript"
    // TODO: Assert it has the CSS class "completed"
    // Hint: use expect(locator).toHaveClass(/completed/)
  });

  // ─── TEST 4: Delete a todo ──────────────────────────────
  test("should delete a todo", async () => {
    await todoPage.addTodo("Learn TypeScript");
    await todoPage.addTodo("Delete me");

    // TODO: Delete "Delete me"
    // TODO: Assert only 1 todo remains
    // TODO: Assert "Delete me" is no longer visible
  });

  // ─── TEST 5: Filter todos ──────────────────────────────
  test("should filter active and completed todos", async () => {
    await todoPage.addTodo("Active task");
    await todoPage.addTodo("Completed task");
    await todoPage.completeTodo("Completed task");

    // TODO: Filter by "Active" and assert only "Active task" is visible
    // TODO: Filter by "Completed" and assert only "Completed task" is visible
    // TODO: Filter by "All" and assert both are visible
  });

  // ─── TEST 6: (Stretch) Write your own test ─────────────
  // TODO: Think of an edge case and write a test for it
  // Ideas: empty todo, very long text, special characters,
  //        complete all then clear completed, etc.
});
