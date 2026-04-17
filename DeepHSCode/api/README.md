# DeepHSCode API (Web)

This API exposes the SmartHSCode agent as an HTTP service.

## Endpoints

- `GET /` : Basic welcome message
- `POST /api/v1/hscode/generate` : Generate HS code suggestions

## 1. Start the API server

From project root:

```bash
cd /Users/lscm/Project/PCS/HSCodeSearch
source .venv/bin/activate
```

Set required LLM environment variables:

```bash
export LLM_MODEL="your-model"
export LLM_HOST="https://your-llm-endpoint"
export LLM_API_KEY="your-api-key"
```

Optional API port (default is `8000`):

```bash
export API_PORT=8000
```

Run server:

```bash
.venv/bin/python DeepHSCode/api/run_server.py
```

Open in browser:

- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

## 2. Test with curl

Health/root check:

```bash
curl http://127.0.0.1:8000/
```

HS code generation:

```bash
curl -X POST "http://127.0.0.1:8000/api/v1/hscode/generate" \
  -H "Content-Type: application/json" \
  -d '{
    "product_description": "Samsung Galaxy S8 smartphone",
    "language": "en",
    "temperature": 0.2,
    "max_tokens": 1000
  }'
```

## 3. Common issues

- `LLM_MODEL not set` or `LLM_HOST not set`
  - Make sure the LLM environment variables are exported before running the server.

- `Address already in use`
  - Change port, for example: `export API_PORT=8010` and restart.

- `ModuleNotFoundError`
  - Ensure you run from project root and activate `.venv` first.
