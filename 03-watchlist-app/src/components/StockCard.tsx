import type { Stock } from "@/types";

// ============================================
// StockCard Component
// ============================================
// TODO: Extract the inline stock card from page.tsx into this component.
//
// Props:
//   stock: Stock        — the stock data to display
//   onDelete: (id: string) => void  — callback when delete is clicked
//
// Requirements:
//   - Show symbol, name, price, and change %
//   - Color the change green (positive) or red (negative)
//   - Include a "Remove" button that calls onDelete
//
// Stretch goals:
//   - Add a hover effect
//   - Show the "addedAt" date in a human-readable format
//   - Add a link to a finance site for the symbol

interface StockCardProps {
  stock: Stock;
  onDelete: (id: string) => void;
}

export function StockCard({ stock, onDelete }: StockCardProps) {
  // Your code here
  return <div>TODO: Implement StockCard</div>;
}
