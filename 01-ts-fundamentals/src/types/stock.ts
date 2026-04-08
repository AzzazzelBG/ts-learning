export interface Stock {
    id: number;
    symbol: string;
    price: number;
    change: number;
}

export type StockPreview = Pick<Stock, "symbol" | "price">;
export type NewStockInput = Omit<Stock, "id">;
export type StockDraft = Partial<Stock>;
export type StockStatus = "bullish" | "bearish" | "neutral";