#!/usr/bin/env bash
# Software Factory: session start context. Prints facts that Claude reads at the start of every session.
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0

echo "Software Factory session start."
if [ -d factory-setup ]; then
  echo "The factory is not installed yet: factory-setup/ exists. AGENTS.md section 0 describes the install."
fi
if [ -f docs/PROGRESS.md ]; then
  echo "Current factory progress (docs/PROGRESS.md):"
  head -n 25 docs/PROGRESS.md
else
  echo "docs/PROGRESS.md does not exist yet. The Owner has not run sf-start."
fi
echo "Art of Scale Coding Coach mode is on: short "Coach:" notes at the moments in AGENTS.md section 5. Say "explain" or "grill me" any time."
exit 0
