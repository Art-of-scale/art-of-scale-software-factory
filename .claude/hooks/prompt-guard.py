#!/usr/bin/env python3
"""UserPromptSubmit hook (Art of Scale Software Factory).
1) Blocks a prompt that contains a secret key, before the AI sees it.
2) Routes 'explain', 'teach' and 'grill me' to the right skill.
Fails open on any error, so it never breaks a session."""
import base64, json, re, sys

def jwt_role(token):
    try:
        part = token.split(".")[1]
        part += "=" * (-len(part) % 4)
        return json.loads(base64.urlsafe_b64decode(part)).get("role", "")
    except Exception:
        return ""

try:
    data = json.load(sys.stdin)
    prompt = data.get("prompt", "") or ""
except Exception:
    sys.exit(0)

SECRET_PATTERNS = [
    (r"sb_secret_[A-Za-z0-9_\-]{10,}", "a Supabase secret key"),
    (r"sk-ant-[A-Za-z0-9_\-]{10,}", "an Anthropic API key"),
    (r"sk-(proj-)?[A-Za-z0-9]{20,}", "an API secret key"),
    (r"sk_live_[A-Za-z0-9]{10,}", "a live payment key"),
    (r"gh[pousr]_[A-Za-z0-9]{30,}", "a GitHub token"),
    (r"github_pat_[A-Za-z0-9_]{30,}", "a GitHub token"),
    (r"postgres(ql)?://[^\s:]+:[^\s@]+@", "a database password"),
    (r"-----BEGIN [A-Z ]*PRIVATE KEY-----", "a private key"),
    (r"AKIA[0-9A-Z]{16}", "a cloud access key"),
]
found = None
for pattern, label in SECRET_PATTERNS:
    if re.search(pattern, prompt):
        found = label
        break
if not found:
    for token in re.findall(r"eyJ[A-Za-z0-9_\-]{10,}\.[A-Za-z0-9_\-]{10,}\.[A-Za-z0-9_\-]{10,}", prompt):
        if jwt_role(token) == "service_role":
            found = "the Supabase service-role key"
            break

if found:
    print(json.dumps({
        "decision": "block",
        "reason": (f"Key guard: your message looks like it contains {found}, so I stopped it before it reached the AI. "
                   "Remove it and send again; keys go only in Vercel settings (https://vercel.com/dashboard → your project → Settings → Environment Variables)."),
    }))
    sys.exit(0)

low = prompt.lower().strip()
# V1.9: a request to print the environment or secret keys is stopped here, visibly, before the AI sees it.
if (re.search(r"\b(print|dump|reveal|echo|cat)\b[^.?!\n]{0,30}\b(environment|env|\.env|secrets?|secret keys?|service[ _-]?role)\b", low)
        or re.search(r"\bshow( me)?\b[^.?!\n]{0,20}\b(secret keys?|service[ _-]?role( key)?|\.env( file)?|my environment)\b", low)
        or re.search(r"\bprintenv\b|\b(cat|print|show|open)\b[^.?!\n]{0,10}\.env\b", low)):
    print(json.dumps({
        "decision": "block",
        "reason": "Command guard: I stopped that. Printing the environment could show secret keys. "
                  "To check a setting, open https://vercel.com/dashboard → your project → Settings → Environment Variables yourself.",
    }))
    sys.exit(0)
notes = []
if re.search(r"\b(explain|teach me|teach|eli5|plain english|what does (that|this) mean|i don.?t understand)\b", low) and len(low) < 400:
    notes.append("The Owner asked for an explanation. Use the sf-explain skill (.claude/skills/sf-explain/SKILL.md).")
if re.search(r"\bgrill me\b", low):
    notes.append("The Owner asked to be grilled. Use the sf-intent skill in Grill mode (.claude/skills/sf-intent/SKILL.md).")
if notes:
    print(" ".join(notes))
sys.exit(0)
