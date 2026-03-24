import type Anthropic from "@anthropic-ai/sdk";

// ============================================
// Chatbot Types
// ============================================

/** A single message in the conversation */
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/** Configuration for the chatbot */
export interface ChatConfig {
  /** The model to use (e.g., "claude-sonnet-4-20250514") */
  model: string;
  /** Maximum tokens in the response */
  maxTokens: number;
  /** System prompt that defines the bot's personality */
  systemPrompt: string;
  /** Temperature: 0 = deterministic, 1 = creative */
  temperature?: number;
}

/**
 * Re-export the SDK's message param type for convenience.
 * This is what the API actually expects in the messages array.
 */
export type MessageParam = Anthropic.MessageParam;
