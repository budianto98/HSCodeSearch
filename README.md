# HSCodeSearch MCP Server

This project contains a minimal MCP (Model Context Protocol) server scaffold.

## Prerequisites

- Python 3.10+
- [uv](https://docs.astral.sh/uv/) installed

## Install dependencies

```bash
uv sync
```

## Environment variables

Create a `.env` file in the project root:

```bash
PERPLEXITY_API_KEY=your_perplexity_api_key_here
```

## Run locally

```bash
uv run server.py
```

## MCP tools included

- `ping`: returns `pong`
- `search_hs_code(query: str)`: placeholder for HS code search logic
- `PPLX_HSCodeAgent(product_description: str)`: queries Perplexity and returns possible HS codes with why each may match

## VS Code MCP config

Project-level MCP server config is in `.vscode/mcp.json`.
