import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { Chatbot } from "./chatbot.js";
import type { ChatConfig } from "./types.js";

// ============================================
// HTTP Chat Server (Stretch Goal)
// ============================================
// A simple HTTP server that exposes the chatbot as an API.
// Run with: npm run start:web
//
// TODO: Implement the /chat endpoint
// - Accept POST requests with JSON body: { "message": "..." }
// - Return JSON: { "response": "..." }
// - Maintain conversation history per session (simplified: single global session)
//
// This is a stepping stone to connecting a React frontend later.

const config: ChatConfig = {
  model: "claude-sonnet-4-20250514",
  maxTokens: 1024,
  systemPrompt: "You are a helpful assistant specializing in investing and tech.",
};

const bot = new Chatbot(config);
const PORT = 3001;

async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  // CORS headers (needed when calling from a frontend)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/chat") {
    // TODO: Implement this endpoint
    // 1. Read the request body
    // 2. Parse it as JSON
    // 3. Call bot.send() with the message
    // 4. Return the response as JSON

    // Hint for reading the body:
    // const chunks: Buffer[] = [];
    // for await (const chunk of req) chunks.push(chunk as Buffer);
    // const body = JSON.parse(Buffer.concat(chunks).toString());

    res.writeHead(501, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not implemented yet" }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}

const server = createServer(handleRequest);
server.listen(PORT, () => {
  console.log(`🤖 Chat API running at http://localhost:${PORT}`);
  console.log(`   POST /chat with { "message": "your question" }`);
});
