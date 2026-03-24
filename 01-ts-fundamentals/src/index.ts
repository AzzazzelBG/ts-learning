// ============================================
// TypeScript Fundamentals — Practice Exercises
// ============================================
// Complete each TODO. Run `npm run check` to verify your types.
// Run `npm start` to see console output.

// ─── EXERCISE 1: Basic Types & Interfaces ────────────────────
// Create an interface for a Stock with: symbol (string), price (number),
// change (number), and an optional field "notes" (string).

// TODO: Define the Stock interface here
// interface Stock { ... }

// TODO: Create an array of 3 stocks and log them
// const watchlist: Stock[] = [...]

// ─── EXERCISE 2: Type Narrowing ─────────────────────────────
// Write a function that accepts a value of type string | number.
// If it's a string, return it uppercased.
// If it's a number, return it doubled.

// TODO: Implement the function
// function processValue(value: string | number): string | number { ... }

// ─── EXERCISE 3: Generics ───────────────────────────────────
// Write a generic function `firstElement<T>` that takes an array of T
// and returns the first element, or undefined if the array is empty.

// TODO: Implement the generic function
// function firstElement<T>(arr: T[]): T | undefined { ... }

// ─── EXERCISE 4: Async/Await with Types ─────────────────────
// Create a typed async function that fetches a user from a fake API.
// Define the response type, use try/catch, and return typed data.

interface User {
  id: number;
  name: string;
  email: string;
}

// This simulates an API call (no real network needed)
async function fakeApiCall(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Bruce Wayne", email: "bruce@wayne.enterprises" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

// TODO: Write an async function `getUser` that:
// 1. Calls fakeApiCall with a given id
// 2. Logs the user's name
// 3. Catches and logs any errors
// 4. Returns User | null

// async function getUser(id: number): Promise<User | null> { ... }

// ─── EXERCISE 5: Utility Types ──────────────────────────────
// Using the Stock interface from Exercise 1:
//
// TODO: Create a type `StockPreview` using Pick<> with only symbol and price
// TODO: Create a type `StockUpdate` using Partial<> to make all fields optional
// TODO: Create a type `ReadonlyStock` using Readonly<>

// ─── EXERCISE 6: Mapped & Conditional Types (Stretch) ───────
// Write a type `ApiResponse<T>` that is:
//   { status: "success"; data: T } | { status: "error"; message: string }

// TODO: Define ApiResponse<T>
// type ApiResponse<T> = ...

// TODO: Write a function that returns ApiResponse<Stock[]>
// function fetchStocks(): ApiResponse<Stock[]> { ... }

// ─── RUN ─────────────────────────────────────────────────────
// Uncomment and call your functions here to test:

async function main() {
  console.log("🦇 TypeScript Fundamentals — Start coding!\n");

  // Example: uncomment after completing exercises
  // console.log("Exercise 1:", watchlist);
  // console.log("Exercise 2:", processValue("hello"), processValue(21));
  // console.log("Exercise 3:", firstElement([10, 20, 30]));
  // const user = await getUser(1);
  // console.log("Exercise 4:", user);
}

main();
