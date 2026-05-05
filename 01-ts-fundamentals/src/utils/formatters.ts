import { Stock, AuditedBug } from '../types/index.js';

export function formatStock(stock: Stock): string {
    const sign = stock.change >= 0 ? "+" : "";
    return `${stock.symbol}: $${stock.price.toFixed(2)} (${sign}${stock.change}%)`;
};

export function summarizeBug(bug: AuditedBug): string {
    const owner = bug.assignee ?? "unassigned";
    return `[${bug.severity.toUpperCase()}] ${bug.title} — ${bug.status} (${owner})`;
};