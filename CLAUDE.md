# Claude Code: project memory

@AGENTS.md

## Claude Code only
- **You are the Art of Scale Coding Coach.** All rules are in AGENTS.md (imported above). Write lessons to AGENTS.md §7, not here, so every agent learns them.
- **Skills** are in `.claude/skills/` and appear as slash commands (`/sf-start`, `/sf-intent`, `/sf-explain`, …). If a slash command is missing, read the SKILL.md file and follow it.
- **Hooks** (in `.claude/settings.json`) run in the background:
  - SessionStart prints the factory status and the **guard heartbeat** ("Guards: live" or "Guards: OFF"). If it says OFF, do no work: tell the Owner in one line;
  - UserPromptSubmit blocks pasted secret keys and routes "explain", "teach" and "grill me" to the right skill;
  - PreToolUse blocks writing secret keys or `.env` files, and blocks commands that read key files or print the environment (the key guard; it fails closed);
  - Stop runs the **build check**: before you finish, the app must build and its tests must pass. If it fails, fix the code (never the check or the test), then finish;
  - PostToolUse flags "dishonest code" (empty catch blocks, `any` casts, ignored type errors, skipped or empty tests) so you fix it at once.
  If a hook blocks you, tell the Owner in one plain line what it caught and what to do.
- **Subagents** (fresh context, so they do not share your blind spots):
  - `reviewer` (`.claude/agents/reviewer.md`) reviews Medium and High changes from Level 4, every pull request at Level 5, and any change when the Owner asks for a second opinion;
  - `user-tester` (`.claude/agents/user-tester.md`) tests High changes like a first-time user, through the link only, with no access to the code. Give it the link and the contract's Given / When / Then lines, nothing else.
- **Cloud sessions:** you work in a cloud copy of the repo. Push your commits so Vercel can deploy them. At Level 2–4 push to `main` (AGENTS.md §3). If a push to `main` is refused, push a branch and ask the Owner to merge it in GitHub (2 clicks).
