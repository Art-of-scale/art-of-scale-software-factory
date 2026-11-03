#!/usr/bin/env python3
"""PreToolUse hook for Bash (Art of Scale Software Factory, V1.4).
Hard brake: the agent cannot read key files or print the environment through a command.
Fails CLOSED: if this guard cannot check a command, it blocks it."""
import json, re, sys

BLOCK_MSG = ("Blocked by the factory key guard: this command could read a key file or print secret "
             "environment values. Keys live in Vercel settings, never in the session. "
             "Tell the Owner in one plain line what was blocked. Do not try another way to read the key.")

try:
    data = json.load(sys.stdin)
    command = (data.get("tool_input", {}) or {}).get("command", "")
    if not isinstance(command, str):
        raise ValueError("command is not text")
except Exception as exc:  # fail closed
    print(f"Factory key guard could not check this command ({exc}), so it is blocked. "
          "Tell the Owner: 'Guard error: the key guard could not run.'", file=sys.stderr)
    sys.exit(2)

c = command
patterns = [
    # any reference to a .env file, except safe templates
    r"(?<![\w.-])\.env(?:\.(?!example\b|sample\b|template\b)[\w.-]+)?(?![\w.-])",
    r"\bsecrets/",
    # printing the whole environment
    r"(^|[;&|(\s])printenv\b",
    r"(^|[;&|(\s])env\s*($|[;&|>)])",
    r"(^|[;&|(\s])(export|declare)\s+-[px]\b",
    r"(^|[;&|(\s])set\s*($|[;&|>)])",
    r"/proc/[^\s]*/environ",
    r"\bcompgen\s+-v\b",
    # printing one secret-looking variable
    r"\$\{?[A-Z0-9_]*(SECRET|SERVICE_ROLE|PRIVATE|PASSWORD|TOKEN|API_KEY)[A-Z0-9_]*\}?",
    # pulling hosted secrets into the session
    r"\bvercel\s+env\s+pull\b",
    r"\bsupabase\s+(secrets|projects\s+api-keys)\b",
]
for p in patterns:
    if re.search(p, c, flags=re.IGNORECASE if "SECRET" not in p else 0):
        print(BLOCK_MSG, file=sys.stderr)
        sys.exit(2)
sys.exit(0)
