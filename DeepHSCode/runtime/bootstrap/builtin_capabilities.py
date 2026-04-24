"""Built-in capability class paths."""

BUILTIN_CAPABILITY_CLASSES: dict[str, str] = {
    "chat": "DeepHSCode.capabilities.chat:ChatCapability",
    "deep_solve": "DeepHSCode.capabilities.deep_solve:DeepSolveCapability",
    "deep_question": "DeepHSCode.capabilities.deep_question:DeepQuestionCapability",
    "deep_research": "DeepHSCode.capabilities.deep_research:DeepResearchCapability",
    "math_animator": "DeepHSCode.capabilities.math_animator:MathAnimatorCapability",
    "visualize": "DeepHSCode.capabilities.visualize:VisualizeCapability",
}
