#!/usr/bin/env bash
# Stop hook (Art of Scale Software Factory, V1.7): the build check.
# V1.7: also builds the commit that was pushed (not only the working copy), and flags work that is not pushed (not live).
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
has_tests=""
if node -e "process.exit(require('./package.json').scripts?.test ? 0 : 1)" 2>/dev/null; then
  has_tests=1
  if ! CI=1 npm test --silent >"$log" 2>&1; then
    echo "Test check FAILED. Do not say done. Fix the code, never the test. Last lines:" >&2
    tail -n 25 "$log" >&2
    rm -f "$log"; exit 2
  fi
fi
# V1.7: if app files are changed but not committed, the pushed commit is not what was just built.
dirty="$(git status --porcelain 2>/dev/null | grep -E '(src/|package(-lock)?\.json|vite\.config|tsconfig|index\.html|tests?/)' )"
if [ -n "$dirty" ] && git rev-parse --verify HEAD >/dev/null 2>&1; then
  tmp="$(mktemp -d)"
  if git worktree add --detach "$tmp/head" HEAD >/dev/null 2>&1; then
    ln -s "$PWD/node_modules" "$tmp/head/node_modules"
    if ! (cd "$tmp/head" && npm run build --silent) >"$log" 2>&1; then
      echo "Build check FAILED on the last commit (what Vercel deploys). The working copy builds, the commit does not. Commit the missing changes, build again, then push. Last lines:" >&2
      tail -n 15 "$log" >&2
      git worktree remove --force "$tmp/head" >/dev/null 2>&1; rm -rf "$tmp" "$log"; exit 2
    fi
    git worktree remove --force "$tmp/head" >/dev/null 2>&1
  fi
  rm -rf "$tmp"
  echo "Build check: app files are changed but not committed, so they are not live. Commit and push them, or tell the Owner they are not live yet." >&2
  rm -f "$log"; exit 2
fi
# V1.7: commits that are not on origin/main are not live (Level 3 pushes to main).
if git rev-parse --verify origin/main >/dev/null 2>&1; then
  git fetch --quiet origin main >/dev/null 2>&1
  ahead="$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)"
  if [ "${ahead:-0}" -gt 0 ]; then
    echo "Build check passed, but $ahead commit(s) are not on main, so they are not live. Push with 'git push origin HEAD:main' (Level 3), or give the Owner the pull request link (Level 4+). Do not say live." >&2
    rm -f "$log"; exit 2
  fi
fi
rm -f "$log"
echo "Build check passed: the app builds${has_tests:+ and its tests pass}, and the last commit is on main."
exit 0
