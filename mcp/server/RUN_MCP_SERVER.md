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

**Important: working directory.** The path `mcp/server/server.py` is relative to the **repository root** (`HSCodeSearch`). If your shell is inside `mcp/server/`, that path does not exist and `uv` errors with *No such file or directory* — the Inspector then cannot attach to a running server.

Use **one** of these:

**A — From the repository root** (recommended):

```bash
cd /path/to/HSCodeSearch
npx -y @modelcontextprotocol/inspector uv run mcp/server/server.py
```

**B — From `mcp/server/`** (shorter path to the script):

```bash
cd /path/to/HSCodeSearch/mcp/server
npx -y @modelcontextprotocol/inspector uv run server.py
```

**C — Pin the project root** (works from any directory):

```bash
npx -y @modelcontextprotocol/inspector uv --directory /path/to/HSCodeSearch run mcp/server/server.py
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

Open that URL in your browser. In the **Server connection** pane, confirm the command matches one of the options above (Transport: **stdio**), then use **Connect** if the UI does not connect automatically. Test tools such as:

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

3. Inspector shows “cannot connect” or `uv` fails with *No such file or directory*
- You ran `uv run mcp/server/server.py` with the current directory **not** the repo root. Fix: `cd` to the repo root (option A), use `uv run server.py` from `mcp/server` (option B), or set `--directory` to the repo root (option C). See section 2 above.
