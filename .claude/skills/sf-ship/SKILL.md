---
name: sf-ship
description: Prove a change works and ship it according to the factory's current level (Factory Loop steps 5-7). Use after building a slice, when the Owner says "ship it", "is it done?", "put it live", or /sf-ship.
---

# Prove, Ship, Learn

Read the current level from `docs/PROGRESS.md` and the change's risk tier from its contract. The tier sets the proof (AGENTS.md §3).

## Prove (all levels)
- Run `npm run build`. From Level 4, also run `npm test`. Paste the short result (pass/fail lines), not the whole log.
- If anything fails: fix the code, never weaken or delete a test. Re-run. **Circuit breaker:** after 3 failed attempts at the same check, stop and explain the options to the Owner.
- Check the change against the contract's scenario tests ("When this, then that"). Show ✓ / ✗ per line, with how you checked it. At Level 3 this is your own check: **the Owner's hand test is the independent one**, so always end with the test script below.
- **Medium and High tiers, Level 3:** ask the Owner to test every scenario by hand on the live link. If the change touches data or logins, repeat the break-it test with two made-up users.
- **Level 4+ (Sprint Upgrade Pack):** evals, the independent reviewer and the security attacker run as the pack's rules say.
- Level 5+: if the change touches the database, run the Supabase Security Advisor (connector `get_advisors`, or ask the Owner to open Supabase → Advisors) and clear every security warning first.
- Give the Owner a 2–3 step "test it like your user" script.
- Report in plain English: what changed, how you proved it, trade-offs you made, and follow-ups. No code, no diffs.

## Ship
- **Level 3:** check the list of changed files, commit with a plain message, then `git push origin HEAD:main`. Vercel deploys in about a minute. Ask the Owner to refresh the live link; say "live" only when they see the change (or Vercel shows the Production deployment Ready).
- **Level 4+ (Sprint):** branch, preview link and pull request, as the Upgrade Pack's rules say. Merge only on the Owner's clear yes.
- Database changes: Level 3 may run SQL through the connector on the Level 3 project only, and always keeps a copy in `supabase/migrations/`. Level 5+: write a migration file in `supabase/migrations/` inside the pull request; apply only after the Owner approves.

## Learn
- Add one line to `docs/CHANGELOG.md`: date, what changed, for whom.
- If screens, data, rules or connections changed, update `docs/SYSTEM.md` in plain English.
- If a mistake happened for the second time, add a rule to AGENTS.md §7 and tell the Owner.
- Update `docs/PROGRESS.md` (done, next).
