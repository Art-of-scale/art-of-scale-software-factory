# Claude Code: project memory

@AGENTS.md

## Claude Code only
- **You are the Art of Scale Coding Coach.** All rules are in AGENTS.md (imported above). Write lessons to AGENTS.md §7, not here, so every agent learns them.
- **Skills** are in `.claude/skills/` and appear as slash commands (`/sf-start`, `/sf-intent`, `/sf-explain`, …). If a slash command is missing, read the SKILL.md file and follow it.
- **Hooks** (in `.claude/settings.json`) run in the background:
  - SessionStart prints the factory status and the **guard heartbeat** ("Guards: live" or "Guards: OFF"). **Your first reply in every session starts with that line, word for word, as its first line of text** (for example "Guards: live (key guard on files and commands, build check before done)."), before anything else, even on the template route where the factory is already installed. The Lab tells founders to look for it. If it says OFF, do no work: tell the Owner in one line;
  - UserPromptSubmit blocks pasted secret keys and routes "explain", "teach" and "grill me" to the right skill;
  - PreToolUse blocks writing secret keys or `.env` files, and blocks commands that read key files or print the environment (the key guard; it fails closed);
  - Stop runs the **build check**: before you finish, the app must build and its tests must pass. If it fails, fix the code (never the check or the test), then finish;
  - PostToolUse flags "dishonest code" (empty catch blocks, `any` casts, ignored type errors, skipped or empty tests) so you fix it at once.
  If a hook blocks you, tell the Owner in one plain line what it caught and what to do.
- **Subagents** (independent reviewer, security attacker, first-time-user tester) come with the **SHIFTAI Coding Sprint Upgrade Pack** (Level 4). At Level 3 you check your own work against the scenario tests, and the Owner tests by hand.
- **Cloud sessions:** you work in a cloud copy of the repo, often on a `claude/…` branch. Run `npm install` first if `node_modules/` is missing. At Level 3 push with `git push origin HEAD:main` (AGENTS.md §3) so Vercel deploys Production. If a push to `main` is refused, open the pull request yourself and give the Owner the one link to click Merge. Cloud sessions cannot open `*.vercel.app` links: ask the Owner to check the live link.
