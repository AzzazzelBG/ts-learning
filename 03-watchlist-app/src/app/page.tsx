"use client";

import { useState, useEffect } from "react";
import type { Stock } from "@/types";
// import { StockCard } from "@/components/StockCard";
// import { AddStockForm } from "@/components/AddStockForm";

// ============================================
// Watchlist App — Main Page
// ============================================
// TODO: Build this page step by step:
// 1. Fetch stocks from /api/stocks on mount
// 2. Display them using a StockCard component
// 3. Add a form to add new stocks
// 4. Add a delete button to each card

export default function Home() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Fetch stocks on component mount
  useEffect(() => {
    async function fetchStocks() {
      try {
        const res = await fetch("/api/stocks");
        if (!res.ok) throw new Error("Failed to fetch stocks");
        const data: Stock[] = await res.json();
        setStocks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchStocks();
  }, []);

  // TODO: Implement addStock function
  // 1. POST to /api/stocks with the new stock data
  // 2. Add the returned stock to the stocks state
  async function addStock(symbol: string, name: string, price: number, change: number) {
    // Your code here
  }

  // TODO: Implement deleteStock function
  // 1. DELETE to /api/stocks?id=<id>
  // 2. Remove the stock from state
  async function deleteStock(id: string) {
    // Your code here
  }

  if (loading) return <p>Loading watchlist...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>Stock Watchlist</h1>

      {/* TODO: Add the AddStockForm component here */}
      {/* <AddStockForm onAdd={addStock} /> */}

      {stocks.length === 0 ? (
        <p>No stocks in your watchlist. Add one above!</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
          {stocks.map((stock) => (
            // TODO: Replace this with a <StockCard /> component
            <div
              key={stock.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{stock.symbol}</strong> — {stock.name}
                <br />
                <span>
                  ${stock.price.toFixed(2)}{" "}
                  <span style={{ color: stock.change >= 0 ? "green" : "red" }}>
                    ({stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)}%)
                  </span>
                </span>
              </div>
              <button onClick={() => deleteStock(stock.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
