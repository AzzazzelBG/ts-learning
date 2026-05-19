import { describe, it, expect, vi, beforeEach } from "vitest";
import { addTask } from "../src/services/task-service.js";
import * as fileUtils from "../src/utils/file.js";
import { createTask } from "../src/test-helpters/factories.js";

// Mock the file module — replaces readData and writeData with fakes
vi.mock("../src/utils/file.js", () => ({
  readData: vi.fn().mockResolvedValue([]),
  writeData: vi.fn().mockResolvedValue(undefined),
}));

describe("addTask", () => {
  beforeEach(() => {
    vi.clearAllMocks();  // reset mocks between tests
  });

  it("should return a task with correct title", async () => {
    const task = await addTask(createTask({ title: "Learn TypeScript" }));
    expect(task.title).toBe("Learn TypeScript");
  });
  it('should set status to pending', async () => {
    const task = await addTask(createTask());
    expect(task.status).toBe("pending");
  });
  it('should use provided priority when given', async () => {
    const task = await addTask(createTask());
    expect(task.priority).toBe("medium");
  });
  it('should have numeric id', async () => {
    const task = await addTask(createTask());
    expect(task.id).toBeGreaterThan(0);
  })
});