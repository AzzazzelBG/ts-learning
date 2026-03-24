// ============================================
// Shared Types — Used across frontend and API
// ============================================

/** A stock in the watchlist */
export interface Stock {
  id: string;
  symbol: string; // e.g. "AAPL"
  name: string; // e.g. "Apple Inc."
  price: number;
  change: number; // daily change in %
  addedAt: string; // ISO date string
}

/** Payload for adding a new stock */
export type AddStockInput = Omit<Stock, "id" | "addedAt">;

/**
 * TODO: Define an ApiResponse<T> type that handles success and error states.
 * Hint: Use what you learned in Project 01, Exercise 6
 *
 * type ApiResponse<T> = ...
 */
