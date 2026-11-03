---
name: sf-ship
description: Prove a change works and ship it according to the factory's current level (Factory Loop steps 5-7). Use after building a slice, when the Owner says "ship it", "is it done?", "put it live", or /sf-ship.
---

# Prove, Ship, Learn

Read the current level from `docs/PROGRESS.md` and the change's risk tier from its contract. The tier sets the proof (AGENTS.md §3).

## Prove (all levels)
- Run `npm run build`. From Level 4, also run `npm test`. Paste the short result (pass/fail lines), not the whole log.
- If anything fails: fix the code, never weaken or delete a test. Re-run. **Circuit breaker:** after 3 failed attempts at the same check, stop and explain the options to the Owner.
- **Medium tier, Level 4+:** ask the `reviewer` subagent for a fresh-context review. Fix Important findings. Re-review is delta only; at most 3 rounds.
- **High tier:** also ask the `user-tester` subagent to test the preview or live link, giving it only the link, the user role and the Given / When / Then lines. Then ask the Owner to test it themselves.
- Check the change against the contract's Given / When / Then lines. Show ✓ / ✗ per line, with how you checked it.
- Level 5+: if the change touches the database, run the Supabase Security Advisor (connector `get_advisors`, or ask the Owner to open Supabase → Advisors) and clear every security warning first.
- Give the Owner a 2–3 step "test it like your user" script.
- Report in plain English: what changed, how you proved it, trade-offs you made, and follow-ups. No code, no diffs.

## Ship
- **Level 2–4:** commit with a plain message and push to `main`. Vercel deploys in about a minute. Give the live link.
- **Level 5+:** push a branch `feat/NNN-<slug>`, open a pull request with: what changed, why (link the spec), evidence, how to test on the preview link. Ask the `reviewer` subagent (fresh context) to review. Fix Important findings. Then ask the Owner: "Review the preview. Shall I merge?" Merge only on their clear yes.
- Database changes: Level 2–4 may run SQL through the connector on the lab project only. Level 5+: write a migration file in `supabase/migrations/` inside the pull request; apply only after the Owner approves.

## Learn
- Add one line to `docs/CHANGELOG.md`: date, what changed, for whom.
- If screens, data, rules or connections changed, update `docs/SYSTEM.md` in plain English.
- If a mistake happened for the second time, add a rule to AGENTS.md §7 and tell the Owner.
- Update `docs/PROGRESS.md` (done, next).
