#!/usr/bin/env bash
# Stop hook (Art of Scale Software Factory, V1.4): the build check.
# Before the agent says "done", the app must build (TypeScript type check + Vite build),
# and the tests must pass if the app has tests. A failure sends the agent back to fix the code.
# The Owner spends no attention on this. Hard brake: the agent cannot finish on a broken build.
input="$(cat)"
# Do not loop: if this stop already came from the build check, let the agent stop and report.
if printf '%s' "$input" | grep -q '"stop_hook_active"[[:space:]]*:[[:space:]]*true'; then
  exit 0
fi
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
[ -f package.json ] || exit 0            # no app yet: nothing to check
# Only check when app files changed since the last commit, or in the last commit.
changed="$(git status --porcelain 2>/dev/null; git diff --name-only HEAD~1 HEAD 2>/dev/null)"
printf '%s' "$changed" | grep -Eq '(^|[[:space:]/])(src/|package(-lock)?\.json|vite\.config|tsconfig|index\.html|tests?/)' || exit 0
if [ ! -d node_modules ]; then
  echo "Build check: dependencies are not installed. Run 'npm install', then the build, before saying done." >&2
  exit 2
fi
log="$(mktemp)"
if ! npm run build --silent >"$log" 2>&1; then
  echo "Build check FAILED. Do not say done. Fix the code (not the check), then finish. Last lines:" >&2
  tail -n 25 "$log" >&2
  rm -f "$log"; exit 2
fi
if node -e "process.exit(require('./package.json').scripts?.test ? 0 : 1)" 2>/dev/null; then
  if ! CI=1 npm test --silent >"$log" 2>&1; then
    echo "Test check FAILED. Do not say done. Fix the code, never the test. Last lines:" >&2
    tail -n 25 "$log" >&2
    rm -f "$log"; exit 2
  fi
fi
rm -f "$log"
exit 0
