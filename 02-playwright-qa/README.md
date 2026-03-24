# 02 — QA Automation with Playwright

Build a real test suite for a TodoMVC app using the Page Object Model pattern.

## Setup

```bash
cd 02-playwright-qa
npm install
npx playwright install chromium
```

## Commands

- `npm test` — Run all tests headless
- `npm run test:headed` — Run with visible browser (great for debugging)
- `npm run test:ui` — Open Playwright's interactive UI mode
- `npm run report` — View the HTML test report

## Exercises

You have two files to complete:

1. **`src/todo-page.ts`** — The Page Object Model. Implement each method.
2. **`tests/todo.spec.ts`** — The test cases. Complete each TODO assertion.

### What is Page Object Model (POM)?

A QA design pattern where you wrap page interactions in a class. Benefits:
- Tests read like plain English: `todoPage.addTodo("Learn TS")`
- If the UI changes, you update ONE file, not every test
- Strongly typed with TypeScript — autocomplete and error checking

## Hints

- Use `npx playwright codegen https://demo.playwright.dev/todomvc` to record actions
- Use `test:headed` to visually debug failing tests
- Playwright's `getByRole`, `getByText`, `getByTestId` are your best friends
- Check [Playwright Locators docs](https://playwright.dev/docs/locators) for reference
