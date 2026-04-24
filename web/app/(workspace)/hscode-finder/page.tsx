"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import AssistantResponse from "@/components/common/AssistantResponse";
import { apiUrl } from "@/lib/api";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface HSCodeStreamEvent {
  event: string;
  data?: unknown;
}

const MAX_USER_CHARS = 4000;

export default function HSCodeFinderPage() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (!listRef.current) return;
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }, []);

  const handleSend = useCallback(async () => {
    const query = input.trim();
    if (!query || loading) return;

    const safeQuery = query.slice(0, MAX_USER_CHARS);
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: safeQuery }, { role: "assistant", content: "" }]);
    setLoading(true);
    scrollToBottom();

    try {
      const response = await fetch(apiUrl("/api/v1/hscode/generate/stream"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_description: safeQuery,
          language: "en",
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { detail?: string };
        throw new Error(payload.detail || `Request failed with status ${response.status}`);
      }

      if (!response.body) {
        throw new Error(t("No streaming body returned by server."));
      }

      const appendAssistantText = (line: string) => {
        setMessages((prev) => {
          const next = [...prev];
          for (let i = next.length - 1; i >= 0; i -= 1) {
            if (next[i].role === "assistant") {
              const existing = next[i].content.trim();
              next[i] = {
                ...next[i],
                content: existing ? `${next[i].content}\n${line}` : line,
              };
              break;
            }
          }
          return next;
        });
        scrollToBottom();
      };

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let pending = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        pending += decoder.decode(value, { stream: true });
        const lines = pending.split("\n");
        pending = lines.pop() ?? "";

        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;

          let parsed: HSCodeStreamEvent | null = null;
          try {
            parsed = JSON.parse(line) as HSCodeStreamEvent;
          } catch {
            continue;
          }

          if (!parsed?.event) continue;

          if (parsed.event === "summary") {
            const summaryData = parsed.data as { markdown?: string } | null;
            if (summaryData?.markdown) {
              appendAssistantText(summaryData.markdown);
            }
            continue;
          }

          if (parsed.event === "final") {
            const pretty = JSON.stringify(parsed.data ?? {}, null, 2);
            appendAssistantText(`\`\`\`json\n${pretty}\n\`\`\``);
            continue;
          }

          if (parsed.event === "error") {
            const message =
              typeof parsed.data === "object" && parsed.data !== null && "message" in parsed.data
                ? String((parsed.data as { message?: unknown }).message ?? "")
                : t("Unknown error");
            throw new Error(message || t("Unknown error"));
          }

          appendAssistantText(`[event] ${parsed.event}`);
        }
      }

      if (pending.trim()) {
        try {
          const parsed = JSON.parse(pending.trim()) as HSCodeStreamEvent;
          if (parsed.event === "summary") {
            const summaryData = parsed.data as { markdown?: string } | null;
            if (summaryData?.markdown) {
              appendAssistantText(summaryData.markdown);
            }
          } else if (parsed.event === "final") {
            const pretty = JSON.stringify(parsed.data ?? {}, null, 2);
            appendAssistantText(`\`\`\`json\n${pretty}\n\`\`\``);
          }
        } catch {
          /* ignore trailing partial line */
        }
      }

      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === prev.length - 1 && msg.role === "assistant" && !msg.content.trim()
            ? { ...msg, content: t("No result was returned by SmartHSCode.") }
            : msg,
        ),
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : t("Unknown error");
      setError(message);
      setMessages((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i >= 0; i -= 1) {
          if (next[i].role === "assistant") {
            next[i] = {
              ...next[i],
              content: next[i].content.trim()
                ? `${next[i].content}\n\n${t("Error: {{message}}", { message })}`
                : t("Error: {{message}}", { message }),
            };
            return next;
          }
        }
        next.push({ role: "assistant", content: t("Error: {{message}}", { message }) });
        return next;
      });
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  }, [input, loading, scrollToBottom, t]);

  const onComposerKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        void handleSend();
      }
    },
    [handleSend],
  );

  return (
    <section className="flex h-full flex-col">
      <header className="border-b border-[var(--border)]/50 px-8 py-4">
        <h1 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">{t("HSCode Finder")}</h1>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          {t("Describe your product, and SmartHSCode Agent will return HS code suggestions.")}
        </p>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <div
          ref={listRef}
          className="flex-1 space-y-4 overflow-y-auto rounded-2xl border border-[var(--border)]/40 bg-[var(--card)]/40 p-4 sm:p-5"
        >
          {messages.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-[var(--border)]/50 bg-[var(--background)]/70 p-6 text-center">
              <p className="text-sm text-[var(--muted-foreground)]">
                {t("Start by entering a product description. Example: \"Insulated stainless steel water bottle, 750ml\".")}
              </p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={`${msg.role}-${idx}`} className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed shadow-sm sm:max-w-[78%] ${
                    msg.role === "user"
                      ? "bg-[var(--secondary)] text-[var(--foreground)]"
                      : "border border-[var(--border)]/50 bg-[var(--background)] text-[var(--foreground)]"
                  }`}
                >
                  {msg.role === "assistant" ? <AssistantResponse content={msg.content} /> : msg.content}
                </div>
              </div>
            ))
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)]/60 bg-[var(--background)] px-4 py-3 text-sm text-[var(--muted-foreground)] shadow-sm">
                <Loader2 size={15} className="animate-spin" />
                <span>{t("SmartHSCode is analyzing your product...")}</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onComposerKeyDown}
            rows={2}
            placeholder={t("Enter product description...")}
            className="w-full resize-none bg-transparent text-[15px] leading-relaxed text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
            disabled={loading}
          />

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="text-xs text-[var(--muted-foreground)]">
              {error ? t("Error: {{message}}", { message: error }) : t("Connected to SmartHSCode Agent")}
            </div>
            <button
              onClick={() => void handleSend()}
              disabled={!canSend}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowUp size={14} />}
              <span>{t("Send")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
