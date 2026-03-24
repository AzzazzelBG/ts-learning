import Anthropic from "@anthropic-ai/sdk";
import type { ChatMessage, ChatConfig, MessageParam } from "./types.js";

// ============================================
// Chatbot — Core Logic
// ============================================
// This class wraps the Anthropic SDK and manages conversation history.

export class Chatbot {
  private client: Anthropic;
  private config: ChatConfig;
  private history: ChatMessage[];

  constructor(config: ChatConfig) {
    // The SDK automatically reads ANTHROPIC_API_KEY from environment
    this.client = new Anthropic();
    this.config = config;
    this.history = [];
  }

  /**
   * Send a message and get a response.
   *
   * TODO: Implement this method:
   * 1. Add the user message to history
   * 2. Call the Anthropic API with the full conversation history
   * 3. Extract the text response
   * 4. Add the assistant response to history
   * 5. Return the response text
   */
  async send(userMessage: string): Promise<string> {
    // Step 1: Add user message to history
    this.history.push({ role: "user", content: userMessage });

    // Step 2: Call the API
    // Hint: Use this.client.messages.create({...})
    // The messages parameter expects MessageParam[] which matches our history format

    // TODO: Your code here
    // const response = await this.client.messages.create({
    //   model: this.config.model,
    //   max_tokens: this.config.maxTokens,
    //   system: this.config.systemPrompt,
    //   messages: this.history as MessageParam[],
    // });

    // Step 3: Extract the text
    // Hint: response.content[0] has a type — check if it's "text"
    // const textBlock = response.content[0];
    // if (textBlock.type !== "text") throw new Error("Unexpected response type");
    // const assistantMessage = textBlock.text;

    // Step 4: Add to history
    // this.history.push({ role: "assistant", content: assistantMessage });

    // Step 5: Return
    // return assistantMessage;

    return "TODO: Implement the send method";
  }

  /**
   * STRETCH: Stream a response token by token.
   *
   * TODO: Implement streaming using this.client.messages.stream()
   * This returns chunks as they arrive — great for real-time UX.
   */
  async *sendStream(userMessage: string): AsyncGenerator<string> {
    this.history.push({ role: "user", content: userMessage });

    // TODO: Your code here
    // Hint:
    // const stream = this.client.messages.stream({
    //   model: this.config.model,
    //   max_tokens: this.config.maxTokens,
    //   system: this.config.systemPrompt,
    //   messages: this.history as MessageParam[],
    // });
    //
    // let fullResponse = "";
    // for await (const event of stream) {
    //   if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    //     fullResponse += event.delta.text;
    //     yield event.delta.text;
    //   }
    // }
    // this.history.push({ role: "assistant", content: fullResponse });

    yield "TODO: Implement streaming";
  }

  /** Get the full conversation history */
  getHistory(): ReadonlyArray<ChatMessage> {
    return this.history;
  }

  /** Clear conversation history (start fresh) */
  clearHistory(): void {
    this.history = [];
  }
}
