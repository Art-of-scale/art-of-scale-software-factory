# The Art of Scale Software Factory Ladder (Art of Scale)

Each level adds one capability and one control. You never need to read code. Your role moves up: asker → product owner → tester → release approver.

| Zone | Level | Name | What it adds | Your role |
|---|---|---|---|---|
| Try | L0 | Prompt app | One HTML file from a chat | Asker |
| Try | L1 | Hosted app builder | Live address; code in GitHub | Describer, tester |
| **Founder factory** | **L2** | **Starter factory** (Lab 9) | Cloud coding agent + repo + database + auto-deploy; AGENTS.md + CLAUDE.md + Coding Coach | Product owner |
| Founder factory | L3 | Intent-first | Grill-me contract (Given / When / Then) → agent's spec → plan for every change; session rituals | Approves the contract |
| Founder factory | L4 | Self-checking | Tests written first from the acceptance criteria; risk tier sets the proof; fresh-context AI review for Medium+ changes; circuit breaker; preview links | Checks the evidence |
| Founder factory | **L5** | **Governed, production-ready** (SHIFTCS) | Branch + pull request + AI review + your merge; first-time-user test for High changes; protected main; CI; migrations; login + row level security; backups; alerts; system map current | Release approver |
| Engineer-led | L6 | Team factory | Several apps; shared company skills; parallel agents; staff contribute | Portfolio owner (with a technical steward) |
| Engineer-led | L7 | CI-gated | Tests and AI review in CI block bad merges; staging; security scans | Sets the bar |
| Engineer-led | L8 | Spec-driven | You write specs + acceptance tests; separate builder / tester / reviewer agents | Product manager |
| Frontier | L9 | Closed loop | Agents run continuously: events start work, a router hands tasks to workers, a watchdog checks real progress; agents deploy, triage, roll back; metric breaches create the next intent | Governor; spends attention only on decisions |
| Frontier | L10 | Dark factory | Spec in, software out, no human code review. Field reports show these collapse after 3–6 months when no human understands the code. | Sets intent, judges outcomes |

**Safe ceiling for a non-technical founder working alone: L5.** L6+ needs a technical steward or engineering team.

## Entry tests (all must be yes)
- **L2:** a change goes live within ~5 min · the app reads and writes its database · the agent reaches one repo only · only the public key is in Vercel · AGENTS.md, CLAUDE.md and the Coding Coach are in the repo.
- **L3:** every change last week has an approved contract with Given / When / Then lines and a technical spec · the agent plans before editing · each session ends with a wrap note.
- **L4:** automated tests cover the main flows and are written before the code for new changes · Medium and High changes get a fresh-context review · the agent shows test results or screenshots before "done" · failing tests are fixed in code, not by changing the test · every change has a preview link.
- **L5:** main is protected · every pull request has an AI review and your merge instruction · every database change is an approved migration · secrets blocked by rule · users log in; real-data tables have row level security · backups on and one restore tested · error alerts reach you · you can explain the app from `docs/SYSTEM.md` in 2 minutes.

## Art of Scale Production-Ready Gate (before real users and real data)
- [ ] Users log in; roles where needed; row level security on every real-data table
- [ ] No keys in code or chat; service-role key only in server settings, if used at all
- [ ] Main protected; pull request + AI review + your merge for every change; migrations for database changes
- [ ] Automated tests pass; you clicked through as each user type
- [ ] Backups on; one restore tested; you know how to roll back
- [ ] Error alerts reach you; a named owner and a backup owner
- [ ] Paid plans where terms require (Vercel Hobby is non-commercial); database will not pause
- [ ] Personal data listed; purpose stated; POPIA notice shown to users
- [ ] No hard stop (payments, sensitive data at scale, core-system writes). If one crept in, call an engineer.
