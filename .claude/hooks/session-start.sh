#!/usr/bin/env bash
# Software Factory: session start context. Prints facts that Claude reads at the start of every session.
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0

echo "Software Factory session start."

# Guard heartbeat (V1.4): prove the hard guards refuse, before any work starts.
H=".claude/hooks"
live=1
command -v python3 >/dev/null 2>&1 || live=0
if [ $live = 1 ]; then
  printf '%s' '{"tool_input":{"command":"cat .env"}}' | python3 "$H/bash-guard.py" >/dev/null 2>&1; [ $? = 2 ] || live=0
  printf '%s' '{"tool_input":{"command":"printenv"}}' | python3 "$H/bash-guard.py" >/dev/null 2>&1; [ $? = 2 ] || live=0
  printf '%s' '{"tool_input":{"file_path":".env","content":"X=1"}}' | python3 "$H/write-guard.py" >/dev/null 2>&1; [ $? = 2 ] || live=0
  printf '%s' '{"tool_input":{"command":"npm run build"}}' | python3 "$H/bash-guard.py" >/dev/null 2>&1; [ $? = 0 ] || live=0
fi
[ -f "$H/build-check.sh" ] || live=0
if [ $live = 1 ]; then
  echo "Guards: live (key guard on files and commands, build check before done)."
else
  echo "Guards: OFF. STOP. Do no work. Tell the Owner first, in one line: 'Guards: OFF. The factory's safety checks are not running. Ask your facilitator or Coach for help.'"
fi

if [ -d factory-setup ]; then
  echo "The factory is not installed yet: factory-setup/ exists. AGENTS.md section 0 describes the install."
fi
if [ -f docs/PROGRESS.md ]; then
  echo "Current factory progress (docs/PROGRESS.md):"
  head -n 25 docs/PROGRESS.md
else
  echo "docs/PROGRESS.md does not exist yet. The Owner has not run sf-start."
fi
if [ -f scripts/passport.mjs ] && command -v node >/dev/null 2>&1; then
  node scripts/passport.mjs 2>/dev/null || echo "Factory Passport: could not be read. Check scripts/passport.mjs."
fi
echo "Status words: say 'factory ready' (the guards and checks work) and the app's class (for example 'Class P app'). Never call the app 'production ready' before the Art of Scale Production-Ready Gate (Level 5)."
echo "Art of Scale Coding Coach mode is on: short \"Coach:\" notes at the moments in AGENTS.md section 5. Say \"explain\" or \"grill me\" any time."
exit 0
