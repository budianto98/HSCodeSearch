# Run HSCodeSearch MCP Server

This guide shows two ways to run the MCP server in this repository:

1. Live demonstration (run server directly)
2. Using MCP Inspector

## Prerequisites

1. Python environment is ready:

```bash
source .venv/bin/activate
```

2. Dependencies are installed:

```bash
uv sync
```

## 1. Live Demonstration

Run from project root:

```bash
python mcp/server/server.py
```

Expected startup output:

```text
HSCodeSearch MCP server is ready.
```

This starts the MCP server over stdio.

## 2. Using MCP Inspector

Run from project root:

```bash
npx @modelcontextprotocol/inspector uv run mcp/server/server.py
```

If prompted:

```text
Need to install the following packages:
@modelcontextprotocol/inspector@...
Ok to proceed? (y)
```

Type `y` and press Enter.

After startup, Inspector prints a URL like:

```text
http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=...
```

Open that URL in your browser, then test tools such as:

1. ping
2. search_hs_code
3. PPLX_HSCodeAgent
4. web_search

## Common Issues

1. Error: `Unexpected token 'H', "HSCodeSear"... is not valid JSON`
- Cause: server writes non-JSON text to stdout before MCP messages.
- Fix: ensure startup logs go to stderr (already handled in this repo).

2. API-key related provider failures
- Set keys in project `.env` (for example `PERPLEXITY_API_KEY`, `SERPER_API_KEY`, etc.).
