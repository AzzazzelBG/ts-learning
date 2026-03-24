# 03 — Stock Watchlist App

A full-stack TypeScript web app using Next.js (React + API routes).

## Setup

```bash
cd 03-watchlist-app
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Architecture

```
src/
├── types.ts                  # Shared types (Stock, AddStockInput)
├── app/
│   ├── layout.tsx            # Root HTML layout
│   ├── page.tsx              # Main page (client component)
│   └── api/stocks/route.ts   # REST API (GET, POST, DELETE)
└── components/
    ├── StockCard.tsx          # Single stock display
    └── AddStockForm.tsx       # Form to add stocks
```

## Exercises (in order)

1. **API routes** — Complete POST and DELETE in `api/stocks/route.ts`
2. **Delete function** — Implement `deleteStock()` in `page.tsx`
3. **Add function** — Implement `addStock()` in `page.tsx`
4. **StockCard component** — Extract the inline JSX into `StockCard.tsx`
5. **AddStockForm component** — Build the form in `AddStockForm.tsx`
6. **Uncomment imports** in `page.tsx` and wire up the components

## Stretch Goals

- Add sorting (by price, change, name)
- Persist data to a JSON file or SQLite with Prisma
- Fetch real prices from a free API like [Alpha Vantage](https://www.alphavantage.co/)
- Add Playwright tests from Project 02 for this app!

## Key Concepts

- **Next.js App Router** — file-based routing where folders = URL paths
- **Route Handlers** — `route.ts` files that export HTTP methods (GET, POST, etc.)
- **Client Components** — `"use client"` directive enables React hooks (useState, useEffect)
- **Server Components** — the default in Next.js, render on the server (no hooks)
