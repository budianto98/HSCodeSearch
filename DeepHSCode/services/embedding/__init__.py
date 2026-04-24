"""
Embedding Service
=================

Unified embedding client for all DeepHSCode modules.
Supports normalized providers: openai, azure_openai, huggingface, cohere,
jina, ollama, vllm, custom.

Usage:
    from DeepHSCode.services.embedding import (
        EmbeddingClient,
        EmbeddingConfig,
        get_embedding_client,
    )

    # Get singleton client
    client = get_embedding_client()
    vectors = await client.embed(["text1", "text2"])

    # Get an async embedding callable
    embed_func = client.get_embedding_func()
"""

from .adapters import (
    BaseEmbeddingAdapter,
    CohereEmbeddingAdapter,
    EmbeddingRequest,
    EmbeddingResponse,
    JinaEmbeddingAdapter,
    OllamaEmbeddingAdapter,
    OpenAICompatibleEmbeddingAdapter,
)
from .client import EmbeddingClient, get_embedding_client, reset_embedding_client
from .config import EmbeddingConfig, get_embedding_config

__all__ = [
    "EmbeddingClient",
    "EmbeddingConfig",
    "get_embedding_client",
    "get_embedding_config",
    "reset_embedding_client",
    "BaseEmbeddingAdapter",
    "EmbeddingRequest",
    "EmbeddingResponse",
    "OpenAICompatibleEmbeddingAdapter",
    "CohereEmbeddingAdapter",
    "JinaEmbeddingAdapter",
    "OllamaEmbeddingAdapter",
]
