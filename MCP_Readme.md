# MCP Server Run Alternatives

This file documents practical ways to run your MCP server at:

- `mcp/server/server.py`

## 1) Run directly with uv (recommended)

From project root:

```bash
uv sync
uv run mcp/server/server.py
```

When started successfully, the server prints:

```text
HSCodeSearch MCP server is ready.
```

## 2) Run with local virtualenv Python

From project root:

```bash
source .venv/bin/activate
python mcp/server/server.py
```

Or without activating:

```bash
.venv/bin/python mcp/server/server.py
```

## 3) Run from VS Code MCP config (project-level)

Your workspace already has `.vscode/mcp.json` configured for stdio.
If your MCP client reads this config, it will launch:

- Command: `.venv/bin/python`
- Args: `mcp/server/server.py`

Current config file:

```json
{
  "servers": {
    "hscodesearch": {
      "type": "stdio",
      "command": "/Users/lscm/Project/PCS/HSCodeSearch/.venv/bin/python",
      "args": [
        "/Users/lscm/Project/PCS/HSCodeSearch/mcp/server/server.py"
      ]
    }
  }
}
```

## 4) Run with MCP Inspector (for debugging tools)

From project root:

```bash
npx @modelcontextprotocol/inspector .venv/bin/python mcp/server/server.py
```

Then open the Inspector URL shown in terminal (with token), connect, and test:

- `ping`
- `search_hs_code`
- `PPLX_HSCodeAgent`

## 5) Use as an MCP server in external clients

Use stdio transport and point to the same command/args.

Example generic client config:

```json
{
  "mcpServers": {
    "hscodesearch": {
      "command": "/Users/lscm/Project/PCS/HSCodeSearch/.venv/bin/python",
      "args": ["/Users/lscm/Project/PCS/HSCodeSearch/mcp/server/server.py"]
    }
  }
}
```

## Environment variable note

`PPLX_HSCodeAgent` requires this variable in `.env` at project root:

```bash
PERPLEXITY_API_KEY=your_key_here
```

Without it, only non-Perplexity tools will be usable.
