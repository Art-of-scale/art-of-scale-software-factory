---
name: sf-dry-run
description: Run the Art of Scale Software Factory dry-run self-check in this cloud session and write a report, for the team testing the Lab Kit before a lab. Use when the tester says "run the dry run", "sf-dry-run" or "self-check".
---

# Dry-run self-check (for testers, not for founders)

Run every check below yourself, one by one. Do not stop at a failure: record it and continue. Never use real data or real keys. Then write `docs/DRY-RUN-REPORT.md` with the table, commit it, and show the table in chat.

| # | Check | How | Pass when |
|---|---|---|---|
| D1 | Cloud session | `echo "remote=$CLAUDE_CODE_REMOTE"; node --version; python3 --version; git remote -v` | `remote=true`; node and python3 present; the remote is the tester's repo |
| D2 | Factory loaded | Count `.claude/skills/*/SKILL.md`; check `.claude/settings.json` has SessionStart, UserPromptSubmit, PreToolUse, PostToolUse, Stop; count `.claude/hooks/*` | 11 skills (10 + sf-dry-run); 5 hook events; 6 hook scripts |
| D3 | AGENTS.md import | Say whether the AGENTS.md rules are already in your context (quote the title of AGENTS.md §3 without opening the file) | You can quote it without reading the file |
| D4 | Hook scripts run | Pipe sample input to each script: `prompt-guard.py` with `{"prompt":"key sb_secret_abcdefghijklmnopqrstu"}` (expect a block), `write-guard.py` with `{"tool_input":{"file_path":"x/.env","content":"A=1"}}` (expect exit 2), `honesty-check.py` with `{"tool_input":{"file_path":"src/a.ts","content":"try{}catch(e){}"}}` (expect exit 2), `bash-guard.py` with `{"tool_input":{"command":"printenv"}}` (expect exit 2) and with `{"tool_input":{"command":"npm run build"}}` (expect exit 0) | All five behave as expected |
| D5 | **Push to main** | Write `docs/DRY-RUN.md` with the date and time, commit "Dry run: push test", then `git push origin HEAD:main`. Record the exact output. If refused, push a branch `claude/dry-run` instead and record that | Push to `main` succeeds (if not: record the error and whether the branch push worked) |
| D6 | Package registry | `npm view vite version` | A version number prints |
| D7 | Browser for user-tester | `node -e "require('playwright'); console.log('playwright ok')"`; `ls /opt/pw-browsers 2>/dev/null`; then write a 10-line Playwright script in `/tmp` that opens the tester's live link (ask for it) and saves a screenshot to `/tmp` | The screenshot is saved |
| D8 | Supabase connector | Say whether Supabase tools are available to you in this session. If yes, list projects (read only). Do not change anything | Tools visible; the lab project is listed |
| D9 | Env var names | Ask the tester to open the live link and read the Database line of the status board (it shows `VITE_` or `NEXT_PUBLIC_`) | Database ✓ and the source is recorded |
| D10 | Build | `npm install` then `npm run build` | Build succeeds |
| D11 | Guard heartbeat | Quote the "Guards:" line from the session start | It says "Guards: live" |
| D12 | Build check script | Run `bash .claude/hooks/build-check.sh` and record the exit code and last line | Exit 0 on a clean build |

Report format (`docs/DRY-RUN-REPORT.md`): date, tester, route (Load button or zip), then `| # | Check | Result (Pass / Fail / Partial) | Evidence (short) |`, then "Blockers for the lab" (one line each) and "Suggested fixes".
Then tell the tester: "Self-check done. Now continue with the manual tests in your Dry Run Guide (Part B4 onwards)."
