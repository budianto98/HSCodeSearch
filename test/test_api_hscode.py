from __future__ import annotations

from fastapi.testclient import TestClient

from DeepHSCode.api.main import app


def test_root_endpoint() -> None:
    client = TestClient(app)
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to DeepHSCode API"}


def test_generate_hscode_success(monkeypatch) -> None:
    class FakeAgent:
        def __init__(self, *args, **kwargs):
            pass

        async def finding_from_proddesc(
            self,
            product_description: str,
            language: str = "en",
            temperature: float = 0.2,
            max_tokens: int = 1000,
        ) -> str:
            assert product_description == "Samsung Galaxy S8 smartphone"
            assert language == "en"
            assert temperature == 0.2
            assert max_tokens == 1000
            return "HS Code: 851713"

    monkeypatch.setattr("DeepHSCode.api.routers.hscode.SmartHSCodeAgent", FakeAgent)

    client = TestClient(app)
    payload = {
        "product_description": "Samsung Galaxy S8 smartphone",
        "language": "en",
        "temperature": 0.2,
        "max_tokens": 1000,
    }
    response = client.post("/api/v1/hscode/generate", json=payload)

    assert response.status_code == 200
    assert response.json() == {"result": "HS Code: 851713"}


def test_generate_hscode_validation_error() -> None:
    client = TestClient(app)
    payload = {
        "product_description": "",
        "language": "en",
        "temperature": 0.2,
        "max_tokens": 1000,
    }
    response = client.post("/api/v1/hscode/generate", json=payload)

    assert response.status_code == 422


def test_generate_hscode_internal_error(monkeypatch) -> None:
    class FailingAgent:
        def __init__(self, *args, **kwargs):
            pass

        async def finding_from_proddesc(self, *args, **kwargs) -> str:
            raise RuntimeError("llm backend unavailable")

    monkeypatch.setattr("DeepHSCode.api.routers.hscode.SmartHSCodeAgent", FailingAgent)

    client = TestClient(app)
    payload = {
        "product_description": "Samsung Galaxy S8 smartphone",
        "language": "en",
        "temperature": 0.2,
        "max_tokens": 1000,
    }
    response = client.post("/api/v1/hscode/generate", json=payload)

    assert response.status_code == 500
    assert response.json()["detail"] == "llm backend unavailable"
