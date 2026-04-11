# HSCodeSearch MCP Server

This project contains a minimal MCP (Model Context Protocol) server scaffold.

## Prerequisites

- Python 3.10+
- [uv](https://docs.astral.sh/uv/) installed

## Install dependencies

```bash
uv sync
```

This creates a local virtual environment in `.venv/`.

## Environment variables

Create a `.env` file in the project root:

```bash
PERPLEXITY_API_KEY=your_perplexity_api_key_here
```

This is only required for `PPLX_HSCodeAgent`. The `ping` and `search_hs_code` tools run without it.

## Run locally

```bash
uv run server.py
```

Alternative without `uv run`:

```bash
.venv/bin/python server.py
```

## Quick check

You can verify the module loads correctly with:

```bash
.venv/bin/python -c "import server; print(server.ping())"
```

## Test with MCP Inspector

1. Start Inspector from the project folder:

```bash
cd /home/budianto/Project/PCS/HSCodeSearch
npx @modelcontextprotocol/inspector uv run server.py
```

2. In terminal output, copy the URL that already includes token:

```text
http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=...
```

3. Open that URL in browser (or VS Code Simple Browser).

4. In Inspector, click **Connect** and test tools:
	 - `ping`
	 - `search_hs_code`
	 - `PPLX_HSCodeAgent`

### Common Inspector errors

- **Connection Error - Did you add the proxy session token in Configuration?**
	- Cause: opening `http://localhost:6274` without token.
	- Fix: open the full URL from terminal with `?MCP_PROXY_AUTH_TOKEN=...`.

- **PORT IS IN USE (6274 or 6277)**
	- Kill old process:

```bash
fuser -k 6274/tcp
fuser -k 6277/tcp
```

	- Then start Inspector again.

## MCP tools included

- `ping`: returns `pong`
- `search_hs_code(query: str)`: placeholder for HS code search logic
- `PPLX_HSCodeAgent(product_description: str)`: queries Perplexity and returns possible HS codes with why each may match

## VS Code MCP config

Project-level MCP server config is in `.vscode/mcp.json`.
