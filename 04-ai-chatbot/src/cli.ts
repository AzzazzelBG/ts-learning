import * as readline from "node:readline";
import { Chatbot } from "./chatbot.js";
import type { ChatConfig } from "./types.js";

// ============================================
// CLI Chat Interface
// ============================================
// A terminal-based chatbot. Run with: npm start

const config: ChatConfig = {
  model: "claude-sonnet-4-20250514",
  maxTokens: 1024,
  systemPrompt: `You are a helpful assistant that specializes in investing and technology.
You give concise, actionable answers. When discussing stocks or investments,
always include a disclaimer that this is not financial advice.`,
  temperature: 0.7,
};

async function main() {
  const bot = new Chatbot(config);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("🤖 AI Chat Assistant (type 'quit' to exit, 'clear' to reset)\n");

  const askQuestion = () => {
    rl.question("You: ", async (input) => {
      const trimmed = input.trim();

      if (trimmed.toLowerCase() === "quit") {
        console.log("\nGoodbye! 🦇");
        rl.close();
        return;
      }

      if (trimmed.toLowerCase() === "clear") {
        bot.clearHistory();
        console.log("--- Conversation cleared ---\n");
        askQuestion();
        return;
      }

      if (!trimmed) {
        askQuestion();
        return;
      }

      try {
        // Basic (non-streaming) version:
        const response = await bot.send(trimmed);
        console.log(`\nAssistant: ${response}\n`);

        // TODO (Stretch): Replace the above with streaming:
        // process.stdout.write("\nAssistant: ");
        // for await (const chunk of bot.sendStream(trimmed)) {
        //   process.stdout.write(chunk);
        // }
        // console.log("\n");
      } catch (err) {
        console.error("\nError:", err instanceof Error ? err.message : err);
        console.log("(Make sure ANTHROPIC_API_KEY is set in your environment)\n");
      }

      askQuestion();
    });
  };

  askQuestion();
}

main();
