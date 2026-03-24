import { NextResponse } from "next/server";
import type { Stock, AddStockInput } from "@/types";

// ============================================
// API Route: /api/stocks
// ============================================
// This is a Next.js Route Handler — it acts as your backend.
// In-memory storage for simplicity (resets on server restart).

const stocks: Stock[] = [
  {
    id: "1",
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.72,
    change: 1.25,
    addedAt: new Date().toISOString(),
  },
  {
    id: "2",
    symbol: "WBD",
    name: "Warner Bros. Discovery",
    price: 8.45,
    change: -2.1,
    addedAt: new Date().toISOString(),
  },
];

/** GET /api/stocks — Return all stocks */
export async function GET() {
  return NextResponse.json(stocks);
}

/** POST /api/stocks — Add a new stock */
export async function POST(request: Request) {
  // TODO: Implement this endpoint
  // 1. Parse the request body as AddStockInput
  // 2. Validate that symbol and name are present
  // 3. Create a new Stock with a generated id and current timestamp
  // 4. Push it to the stocks array
  // 5. Return the new stock with status 201

  // Hint:
  // const body: AddStockInput = await request.json();
  // return NextResponse.json(newStock, { status: 201 });

  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}

/** DELETE /api/stocks?id=<id> — Remove a stock */
export async function DELETE(request: Request) {
  // TODO: Implement this endpoint
  // 1. Get the "id" from the URL search params
  // 2. Find and remove the stock from the array
  // 3. Return 204 if found, 404 if not

  // Hint:
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
}
