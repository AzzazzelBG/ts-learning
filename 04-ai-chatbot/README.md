# 04 — AI Chat Assistant

Build a chatbot powered by Claude using the Anthropic TypeScript SDK.

## Prerequisites

You need an Anthropic API key. Get one at [console.anthropic.com](https://console.anthropic.com/).

Set it as an environment variable:

```bash
# macOS/Linux
export ANTHROPIC_API_KEY="sk-ant-..."

# Windows (PowerShell)
$env:ANTHROPIC_API_KEY="sk-ant-..."
```

## Setup

```bash
cd 04-ai-chatbot
npm install
```

## Commands

- `npm start` — Run the CLI chatbot
- `npm run start:web` — Run the HTTP server version
- `npm run check` — Type-check the project

## Exercises (in order)

### Phase 1: Basic Chat
1. **Implement `send()`** in `src/chatbot.ts` — call the Anthropic API and return the response
2. **Test it** — run `npm start` and have a conversation

### Phase 2: Streaming
3. **Implement `sendStream()`** — use the streaming API for real-time responses
4. **Wire it up** in `cli.ts` — uncomment the streaming section

### Phase 3: HTTP Server
5. **Implement `/chat`** in `src/server.ts` — expose the chatbot as an API
6. **Test with curl:**
   ```bash
   curl -X POST http://localhost:3001/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "What is TypeScript?"}'
   ```

### Stretch Goals
- Connect the watchlist app (Project 03) to ask Claude about stocks
- Add a system prompt that loads context from a file
- Implement conversation history with multiple sessions
- Add tool use — let Claude call functions (e.g., look up a stock price)

## Key Concepts

- **Anthropic SDK** — the official TypeScript library for calling Claude's API
- **System Prompt** — instructions that define how the bot behaves (set once per conversation)
- **Streaming** — receiving the response in chunks as it's generated (better UX than waiting for the full response)
- **Temperature** — controls randomness: 0 = consistent, 1 = creative
- **AsyncGenerator** — a function that `yield`s values over time (used for streaming)
