#!/usr/bin/env python3
"""PostToolUse hook for Write/Edit/MultiEdit (Art of Scale Software Factory).
Flags code that hides failures or games tests, so the agent fixes it at once.
Feedback only (the edit has already happened). Fails open on any error."""
import json, re, sys

try:
    data = json.load(sys.stdin)
    ti = data.get("tool_input", {}) or {}
except Exception:
    sys.exit(0)

path = ti.get("file_path", "") or ""
if not re.search(r"\.(ts|tsx|js|jsx|mjs|cjs)$", path) or "/node_modules/" in path:
    sys.exit(0)
texts = [ti.get("content", ""), ti.get("new_string", "")] + [e.get("new_string", "") for e in (ti.get("edits") or [])]
code = "\n".join(t for t in texts if isinstance(t, str))
is_test = bool(re.search(r"(\.test\.|\.spec\.|/__tests__/)", path))

checks = [
    (r"catch\s*(\([^)]*\))?\s*\{\s*\}", "an empty catch block (it hides errors)"),
    (r"catch\s*(\([^)]*\))?\s*\{\s*(//[^\n]*\s*)*return\s*(null|undefined|\[\]|\{\}|false)?\s*;?\s*\}", "a catch block that silently returns a default (it hides errors)"),
    (r"@ts-ignore|@ts-nocheck|@ts-expect-error", "an ignored type error"),
    (r"\bas\s+any\b|:\s*any\b", "an `any` type (it switches off type checks)"),
    (r"eslint-disable", "a disabled lint rule"),
]
if is_test:
    checks += [
        (r"\b(it|test|describe)\.skip\(|\bxit\(|\bxdescribe\(", "a skipped test"),
        (r"expect\(\s*true\s*\)\.toBe\(\s*true\s*\)", "a test that asserts nothing"),
        (r"\.only\(", "a focused test (.only) that stops the other tests running"),
    ]
found = [label for pattern, label in checks if re.search(pattern, code)]
if found:
    print(f"Factory honesty check on {path}: found {', '.join(found)}. "
          "AGENTS.md §4 says never hide errors or game tests. Fix it now: handle the error and show the user a clear "
          "message, or give a precise type. If it is truly needed, explain why to the Owner in one line.", file=sys.stderr)
    sys.exit(2)
sys.exit(0)
