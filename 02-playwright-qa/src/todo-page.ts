import { type Page, type Locator } from "@playwright/test";

/**
 * Page Object Model (POM) for the TodoMVC demo app.
 *
 * POM is a design pattern in QA automation that encapsulates page interactions
 * into a class — making tests cleaner and easier to maintain.
 *
 * TODO: Complete the methods below.
 */
export class TodoPage {
  // Locators — define once, reuse everywhere
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly todoCount: Locator;
  readonly toggleAll: Locator;
  readonly clearCompleted: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder("What needs to be done?");
    this.todoItems = page.getByTestId("todo-item");
    this.todoCount = page.getByTestId("todo-count");
    this.toggleAll = page.getByLabel("Toggle All");
    this.clearCompleted = page.getByRole("button", {
      name: "Clear completed",
    });
  }

  /** Navigate to the TodoMVC app */
  async goto() {
    await this.page.goto("/");
  }

  /**
   * TODO: Add a new todo item.
   * 1. Fill the newTodoInput with the given text
   * 2. Press Enter
   */
  async addTodo(text: string): Promise<void> {
    // Your code here
  }

  /**
   * TODO: Get the count of visible todo items.
   * Hint: use this.todoItems.count()
   */
  async getTodoCount(): Promise<number> {
    // Your code here
    return 0;
  }

  /**
   * TODO: Mark a specific todo as completed by its text.
   * Hint: find the todo item containing the text, then click its checkbox
   */
  async completeTodo(text: string): Promise<void> {
    // Your code here
  }

  /**
   * TODO: Delete a todo by its text.
   * Hint: hover over the item first to reveal the destroy button
   */
  async deleteTodo(text: string): Promise<void> {
    // Your code here
  }

  /**
   * TODO: Filter todos by clicking "Active", "Completed", or "All"
   */
  async filterBy(filter: "All" | "Active" | "Completed"): Promise<void> {
    // Your code here
  }
}
