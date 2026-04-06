import { Severity } from "./exercise2.js";

// Task A: Using your Stock interface, create the following utility types:
interface Stock {
    id: number;
    symbol: string;
    price: number;
    change: number;
}

type StockPreview = Pick<Stock, "symbol" | "price">;
type NewStockInput = Omit<Stock, "id">;
type StockDraft = Partial<Stock>;
type SeverityCount = Record<Severity, number>;

// StockPreview — only symbol and price (use Pick)
// NewStockInput — everything except id (use Omit — add id to your Stock interface first if it doesn't have one)
// StockDraft — all fields optional (use Partial)
// SeverityCount — a record mapping Severity to number (use Record)

// Create a variable for each type to prove they work.
const littlePick: StockPreview = {
    symbol: "SU",
    price: 65.66
};

const omitExample: NewStockInput = {
    symbol: "MSFT",
    price: 150,
    change: 14
};

const partialPractice: StockDraft = {
    price: 114
};

const recordPractice: SeverityCount = {
    "low": 111,
    "medium": 33,
    "high": 10,
    "critical": 2
};

// Task B: Create a discriminated union RequestState<T> with three variants:

// { status: "loading" }
// { status: "success"; data: T }
// { status: "error"; message: string }

type RequestState<T> =
    | { status: "loading" }
    | { status: "success"; data: T }
    | { status: "error", message: string };

// Then write a function renderState that takes RequestState<Stock[]> and returns a string:

// loading → "Fetching stocks..."
// success → "Loaded X stocks" (where X is the array length)
// error → "Error: <message>"

function handleRequests(state: RequestState<Stock[]>): string {
    switch (state.status) {
        case "loading":
            return "Fetching stocks...";
            break;

        case "success":
            return `Loading ${state.data.length} stocks`;
            break;

        case "error":
            return `Error: ${state.message}`;
            break;

        default:
            const _exhaustive: never = state;
            return _exhaustive;
    };
}
// Use a switch statement with an exhaustive never check in the default case.

// Task C: Write a custom type guard isStock that takes value: unknown and returns value is Stock. Check that the value is an object, not null, and has symbol and price properties.

function isStock(value: unknown): value is Stock {
    return (
        typeof value === "object" &&
        value !== null &&
        "symbol" in value &&
        "price" in value
    );
};



// Then test it:
const mystery: unknown = { symbol: "AAPL", price: 178, change: 1.5 };
if (isStock(mystery)) {
    console.log(mystery.symbol);  // should work with no errors
}
// Task D: Write a function updateStock that takes a Stock and a Partial<Stock>, returns a new Stock with the updates applied (use the spread pattern we discussed). Test it by updating only the price of an existing stock.

function updateStock(stock: Stock, optionalStop: Partial<Stock>): Stock {
    return { ...stock, ...optionalStop };
};


// Block 5 Mini-Challenge
// Before we move on, one quick task to tie everything together. Add this to exercise5.ts:
// Write a function processStockData that takes data: unknown and:

// Uses your isStock type guard to check if it's a Stock
// If yes, uses updateStock to set the change to 0 and returns it wrapped in RequestState as a success
// If no, returns a RequestState error with message "Invalid stock data"

// typescript// Should return { status: "success", data: updatedStock }
// processStockData({ symbol: "AAPL", price: 178, change: 5, id: 1 });

// // Should return { status: "error", message: "Invalid stock data" }
// processStockData("not a stock");