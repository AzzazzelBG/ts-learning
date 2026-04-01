// Task A: Write a generic function lastElement<T> that takes an array of T and returns the last element, or undefined if the array is empty.
// Example: lastElement([1, 2, 3]) → 3
// Example: lastElement(["a", "b"]) → "b"
// Example: lastElement([]) → undefined

function lastElement<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}


// Task B: Write a generic function filterByProperty<T> that takes:

// items: array of T
// key: a key of T (use keyof T)
// value: the value to match

// It should return a filtered array of T.

// keyof T gives you a union of all property names of T. For example, keyof Stock is "symbol" | "price" | "change" | "notes".

// Example: filterByProperty(bugs, "severity", "critical") → returns only critical bugs

function filterByProperty<T>(items: T[], key: keyof T, value: T[keyof T]): T[] {
    return items.filter(item => item[key] === value);
}


// Task C: Create a generic ApiResponse<T> interface with:

// success: boolean
// data: T
// error: optional string

// Then create two variables:

// One of type ApiResponse<Stock[]> with success data
// One of type ApiResponse<string> with an error state

interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
}

// Success case — data is Stock[]
const stockResponse: ApiResponse<Stock[]> = {
    success: true,
    data: [
        { symbol: "AAPL", price: 178, change: 1.5 },
        { symbol: "NFLX", price: 620, change: -2.1 },
    ],
};

// Error case — data is string (but empty since it failed)
const errorResponse: ApiResponse<string> = {
    success: false,
    data: "",
    error: "Failed to fetch data",
};

// Task D: Write a generic function mergeObjects<T extends object, U extends object> that takes two objects and returns them merged. Return type should be T & U.
// Example: mergeObjects({ name: "Bruce" }, { age: 35 }) → { name: "Bruce", age: 35 }

function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
}

// **Task E:** Write a generic function `pluck<T>` that takes an array of `T` and a `key: keyof T`, and returns an array of the values at that key.
// ```
// Example: pluck([{ name: "Bruce", age: 35 }, { name: "Alfred", age: 65 }], "name") → ["Bruce", "Alfred"]
// ```

// Hint: use `.map()` and the return type is `T[keyof T][]`.

function pluck<T>(arr: T[], key: keyof T): T[keyof T][] {
    return arr.map(x => x[key]);
}

// **Task F:** Write a generic function `wrapInResponse<T>` that takes a `data: T` and returns an `ApiResponse<T>` with `success: true` and no error.
// ```
// Example: wrapInResponse("hello") → { success: true, data: "hello" }
// Example: wrapInResponse(42) → { success: true, data: 42 }
// ```

function wrapInResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data
    };
};

// **Task G:** Write a generic function `getOrDefault<T>` that takes `value: T | undefined` and `fallback: T`, and returns `T`. If value is undefined, return the fallback.
// ```
// Example: getOrDefault("hello", "default") → "hello"
// Example: getOrDefault(undefined, "default") → "default"

function getOrDefault<T>(value: T | undefined, fallback: T): T {
    return value ?? fallback;
}