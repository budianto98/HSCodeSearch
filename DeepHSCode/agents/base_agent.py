from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any, AsyncGenerator, Awaitable, Callable

from DeepHSCode.services.llm.config import get_llm_config_from_env
from DeepHSCode.services.prompt.manager import get_prompt_manager


# The repository currently does not expose concrete LLM call helpers.
# These callables can be wired from an LLM client module when available.
LLMCompleteCallable = Callable[..., Awaitable[str]]
LLMStreamCallable = Callable[..., AsyncGenerator[str, None]]


class BaseAgent(ABC):
    """
    Simplified BaseAgent for interacting with LLMs.

    Core features:
    - LLM configuration (API key, model, base URL).
    - Unified LLM call functionality (streaming/non-streaming).
    - Refreshable agent-specific configuration.
    """

    def __init__(
        self,
        api_key: str | None = None,
        base_url: str | None = None,
        model: str | None = None,
        llm_complete: LLMCompleteCallable | None = None,
        llm_stream: LLMStreamCallable | None = None,
        module_name: str | None = None,
        agent_name: str | None = None,
        language: str = "en",
    ) -> None:
        config              = get_llm_config_from_env()
        self.api_key        = api_key or config.api_key
        self.base_url       = base_url or config.base_url
        self.model          = model or config.model
        self._llm_complete  = llm_complete
        self._llm_stream    = llm_stream
        self.prompts: dict[str, Any] | None = None
        if module_name and agent_name:
            try:
                self.prompts = get_prompt_manager().load_prompts(
                    module_name=module_name,
                    agent_name=agent_name,
                    language=language,
                )
            except Exception:
                self.prompts = None

    # -------------------------------------------------------------------------
    # Prompt Helpers
    # -------------------------------------------------------------------------

    def get_prompt(self, section_or_type: str, fallback: str = "") -> str:
        if not self.prompts:
            return fallback
        value = self.prompts.get(section_or_type)
        return value if isinstance(value, str) else fallback

    def has_prompts(self) -> bool:
        """Check if prompts have been loaded."""
        return self.prompts is not None

    async def call_llm(
        self,
        user_prompt: str,
        system_prompt: str,
        temperature: float = 0.7,
        max_tokens: int = 1000,
    ) -> str:
        """
        Call the LLM for non-streaming requests.

        Args:
            user_prompt: User input prompt.
            system_prompt: System-level instructions for the LLM.
            temperature: Sampling temperature.
            max_tokens: Maximum response token count.

        Returns:
            LLM response text as a string.
        """
        if self._llm_complete is None:
            raise NotImplementedError(
                "llm_complete callable is not configured. "
                "Provide it in BaseAgent(...) or implement an LLM client module."
            )

        return await self._llm_complete(
            prompt=user_prompt,
            system_prompt=system_prompt,
            model=self.model,
            api_key=self.api_key,
            base_url=self.base_url,
            temperature=temperature,
            max_tokens=max_tokens,
        )

    async def stream_llm(
        self,
        user_prompt: str,
        system_prompt: str,
        temperature: float = 0.7,
        max_tokens: int = 1000,
    ) -> AsyncGenerator[str, None]:
        """
        Stream the LLM response for better real-time interaction.

        Args:
            user_prompt: User input prompt.
            system_prompt: System-level instructions for the LLM.
            temperature: Sampling temperature.
            max_tokens: Maximum response token count.

        Yields:
            Successive chunks of the response.
        """
        if self._llm_stream is None:
            raise NotImplementedError(
                "llm_stream callable is not configured. "
                "Provide it in BaseAgent(...) or implement an LLM client module."
            )

        async for chunk in self._llm_stream(
            prompt=user_prompt,
            system_prompt=system_prompt,
            model=self.model,
            api_key=self.api_key,
            base_url=self.base_url,
            temperature=temperature,
            max_tokens=max_tokens,
        ):
            yield chunk

    def refresh_llm_config(self) -> None:
        """Reload the LLM configuration from environment."""
        config = get_llm_config_from_env(use_cache=False)
        self.api_key = config.api_key
        self.base_url = config.base_url
        self.model = config.model

    @abstractmethod
    async def process(self, *args: Any, **kwargs: Any) -> Any:
        """
        Abstract method for processing agent-specific tasks.

        Subclasses must implement this method.
        """
        raise NotImplementedError