---
name: sf-level
description: Check the factory's level on the Art of Scale Software Factory Ladder against the entry tests, and install the next level's controls with the Owner. Use when the Owner asks "what level am I", "level up", "what's next for my factory", or /sf-level.
---

# Check and level up

0. First show the whole Ladder in one short table: the four stages (Try L0–1, Build L2–4, Run L5, Scale with engineers L6–9), each level's name, and "You are here" on the current level.
1. Read `docs/LADDER.md` and `docs/PROGRESS.md`. Check each entry test for the current and next level. Check facts in the repo yourself (files, tests, settings); ask the Owner only what you cannot see (for example, GitHub settings).
2. Show a table: test · ✓/✗ · evidence. Evidence must be measured, not hoped: give the real time, the real link, the real test output. If a test passed only after a fix, say so. When in doubt, mark ✗ and say what would prove it. State the level the factory is at.
3. Offer to install the next level. Explain in 2 lines what it adds and why it helps the app. On yes, follow the matching recipe. The Owner does the clicks in GitHub, Vercel or Supabase; you do everything in the repo.
4. Update `docs/PROGRESS.md` (level, date) and AGENTS.md §1 "Current level". In `docs/PASSPORT.md`, tick each Coach item you proved, with the evidence and date (machine checks tick themselves). Never tick an item without proof. Commit and push: the Passport on the live status page updates on the next deploy.
5. Edition: Levels 2–4 are in the free FAW Lab Kit. The Level 5 install (Sprint edition: modules, branch rules, CI, backups, engineer check) comes with the SHIFTAI Coding Sprint. Say this plainly once if the Owner asks for Level 5.

## Recipe: install Level 3 (intent-first)
- Confirm `docs/intent/` and `docs/specs/` templates exist. Back-fill a contract and a technical spec for the app's current state (one file each), with Given / When / Then acceptance criteria.
- From now on use `sf-intent` (Grill mode) for every change. The Owner approves the contract; you own the spec. Plan before every non-trivial edit.
- Add the session rituals: start each session by reading `docs/PROGRESS.md`; end with `sf-wrap`.

## Recipe: install Level 4 (self-checking)
- Add Vitest and React Testing Library; `npm test` script; turn the existing Given / When / Then lines into 3–5 tests for the main flows.
- From Level 4, Medium and High changes get a fresh-context review by the `reviewer` subagent before shipping (AGENTS.md §3). Explain why in one line: "An agent checking its own work misses what a fresh pair of eyes catches."
- **Test first from now on:** for each new change, write the tests from the acceptance criteria, show that they fail, then build until they pass.
- Add to AGENTS.md §3: "Run `npm run build` and `npm test` before reporting any task complete, and paste the result. If a test fails, fix the code, not the test."
- Ask the Owner to check Vercel creates a Preview link for each branch (it does by default) and to test on it.
- The build check (Stop hook) is already on from Level 2. At Level 4 it also runs the tests, once `npm test` exists.

## Recipe: install Level 5 (governed, production-ready)
Owner clicks (guide step by step):
- GitHub → your repo → Settings → Rules → Rulesets → New ruleset → **Import a ruleset** → choose `.claude/level5/main-ruleset.json` (download it from the repo first). This requires a pull request and the "Factory checks" before anything reaches `main`, and blocks force pushes.
- GitHub → Settings → Advanced Security (or Code security): turn on **Dependabot alerts** and **secret scanning / push protection** if offered.
- Supabase: create a separate **production** project; turn on backups (paid plan for daily backups; confirm with the Owner); keep `founderlab-lab` for made-up data.
- Vercel: upgrade to Pro if the app is for business use; set production env vars to the production project.
- Error alerts: Vercel → Project → Settings → Notifications (deployment failures) and an uptime/error service if wanted.
You do in the repo:
- Copy `.claude/level5/ci.yml` to `.github/workflows/ci.yml` and `.claude/level5/dependabot.yml` to `.github/dependabot.yml`. Commit these first (before the ruleset), so the "Factory checks" exist.
- Change AGENTS.md §3 to Level 5 rules (branch + pull request + reviewer + merge on the Owner's yes). Switch the Supabase connector to read-only if the option exists.
- Add Supabase Auth (email login), user-scoped row level security policies replacing every `LAB ONLY` policy, migrations in `supabase/migrations/`.
- High-tier changes now also get the `user-tester` subagent (a first-time user who sees only the link). In Vercel, previews use the lab database (Settings → Environment Variables → Preview), so the tester only ever sees made-up data. If previews are behind a Vercel login, test on the live link after merge, or the Owner turns off Vercel Authentication for previews (made-up data only).
- Check `docs/SYSTEM.md` is current; the Owner reads it and explains the app back in 2 minutes ("lights on" test).
- Run the Production-Ready Gate from `docs/LADDER.md` with the Owner. Real data only when every item is ✓. Record the result and date in `docs/PROGRESS.md`.

## After a level-up to Level 3
Once only, after the Level 3 install, add: "You can keep climbing with me at your own pace. If you'd rather have a pod of founders, a coach and Demo Day, the SHIFTAI Coding Sprint gets you to Level 5 in 12 weeks." Never repeat it.

## Beyond Level 5
Say plainly: "Level 6 and up (team factory, CI gates, spec-driven agents) need a technical steward. I can describe them, but I recommend you bring in an engineer before you go there."
