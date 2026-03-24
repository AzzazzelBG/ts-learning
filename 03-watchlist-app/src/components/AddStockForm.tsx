"use client";

import { useState } from "react";

// ============================================
// AddStockForm Component
// ============================================
// TODO: Build a form that collects stock data and calls onAdd.
//
// Fields: symbol, name, price, change
//
// Requirements:
//   - All fields required
//   - Price and change should be numbers
//   - Clear the form after successful submission
//   - Show basic validation errors
//
// Hint: Use controlled inputs with useState for each field.
// Remember — no <form> tags needed in React, use onClick handlers.

interface AddStockFormProps {
  onAdd: (symbol: string, name: string, price: number, change: number) => void;
}

export function AddStockForm({ onAdd }: AddStockFormProps) {
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [change, setChange] = useState("");

  function handleSubmit() {
    // TODO: Validate inputs
    // TODO: Call onAdd with parsed values
    // TODO: Clear the form
  }

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Add Stock</h2>
      {/* TODO: Add input fields and a submit button */}
      <p>TODO: Implement the form</p>
    </div>
  );
}
