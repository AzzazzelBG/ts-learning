# 01 — TypeScript Fundamentals

Practice core TS concepts: types, interfaces, generics, async, and utility types.

## Setup

```bash
cd 01-ts-fundamentals
npm install
```

## Commands

- `npm run check` — Type-check without building (run often!)
- `npm start` — Run the exercises
- `npm run dev` — Watch mode (re-runs on save)

## Exercises

Open `src/index.ts` and complete each TODO. The exercises build on each other:

1. **Basic Types & Interfaces** — Define a `Stock` interface
2. **Type Narrowing** — Handle `string | number` union types
3. **Generics** — Write a reusable generic function
4. **Async/Await** — Typed async data fetching
5. **Utility Types** — `Pick`, `Partial`, `Readonly`
6. **Mapped & Conditional Types** — (Stretch goal) `ApiResponse<T>`

## Hints

- Use `strict: true` in tsconfig — it's already set for you
- Hover over variables in VS Code to see inferred types
- If stuck on generics, think: "What type does the CALLER decide?"
