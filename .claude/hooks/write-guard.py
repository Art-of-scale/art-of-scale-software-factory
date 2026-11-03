#!/usr/bin/env python3
"""PreToolUse hook for Write/Edit/MultiEdit (Art of Scale Software Factory).
Blocks writing .env files or secret keys into the repo. Fails CLOSED (V1.4): if it cannot check, it blocks."""
import base64, json, os, re, sys

try:
    data = json.load(sys.stdin)
    tool_input = data.get("tool_input", {}) or {}
except Exception as exc:
    print(f"Factory key guard could not check this write ({exc}), so it is blocked. Tell the Owner: 'Guard error: the key guard could not run.'", file=sys.stderr)
    sys.exit(2)

path = tool_input.get("file_path", "") or ""
name = os.path.basename(path)
if re.fullmatch(r"\.env(\..+)?", name) and not name.endswith((".example", ".sample")):
    print("Blocked by the factory: do not create .env files. Keys live in Vercel settings, not in the repo. "
          "Tell the Owner in one line, and use Vercel environment variables instead.", file=sys.stderr)
    sys.exit(2)

texts = [tool_input.get("content", ""), tool_input.get("new_string", "")]
for edit in tool_input.get("edits", []) or []:
    texts.append(edit.get("new_string", ""))
blob = "\n".join(t for t in texts if isinstance(t, str))

patterns = [r"sb_secret_[A-Za-z0-9_\-]{10,}", r"sk-ant-[A-Za-z0-9_\-]{10,}", r"sk_live_[A-Za-z0-9]{10,}",
            r"gh[pousr]_[A-Za-z0-9]{30,}", r"-----BEGIN [A-Z ]*PRIVATE KEY-----", r"postgres(ql)?://[^\s:]+:[^\s@]+@"]
hit = any(re.search(p, blob) for p in patterns)
if not hit:
    for token in re.findall(r"eyJ[A-Za-z0-9_\-]{10,}\.[A-Za-z0-9_\-]{10,}\.[A-Za-z0-9_\-]{10,}", blob):
        try:
            part = token.split(".")[1]; part += "=" * (-len(part) % 4)
            if json.loads(base64.urlsafe_b64decode(part)).get("role") == "service_role":
                hit = True; break
        except Exception:
            pass
if hit:
    print("Blocked by the factory: this change contains a secret key. Never put keys in code. Read keys from "
          "environment variables (import.meta.env.VITE_...) and only ever the public key. Tell the Owner in one line.",
          file=sys.stderr)
    sys.exit(2)
sys.exit(0)
