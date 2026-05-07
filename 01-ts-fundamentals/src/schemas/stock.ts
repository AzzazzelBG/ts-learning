import { z } from "zod";

export const StockSchema = z.object({
    id: z.number(),
    symbol: z.string(),
    price: z.number(),
    change: z.number()
});

export const StockResponseSchema = z.array(StockSchema);

export type StockFromSchema = z.infer<typeof StockSchema>;