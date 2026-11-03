# The Art of Scale Software Factory Ladder (Art of Scale)

Each level adds one capability and one control. You never need to read code. Your role moves up: asker → product owner → tester → release approver.

Four stages: **Try** (L0–1), **Build** (L2–4), **Run** (L5, the graduation), **Scale with engineers** (L6–9). **Claim the lowest:** score Make (how work is built and proved), Run (does the app stay up and recover) and Govern (who may change what). Your level is the lowest of the three.

| Stage | Level | What you add | Your role | Safe for |
|---|---|---|---|---|
| Try | L0 Prompt app | One page from one prompt | Asker | Class 0 demo |
| Try | L1 Hosted app | A hosted builder (Lovable); a live address; code in your GitHub | Describer | Class 0 |
| Build | **L2 Starter factory** (Lab 9) | This factory: cloud agent on your repo, database, auto-deploy, rules and memory, key guard, build check, status board, the Coach | Product owner | Class 0 (made-up data) |
| Build | L3 Intent-first | Every change starts as a contract you approve (Given / When / Then); plan before edit; "Show me" proof | Contract approver | Class 0 |
| Build | L4 Self-checking | Protected acceptance tests written before the build and re-run on every change; a fresh reviewer for Medium and High changes; a branch and preview per change, merged by you | Evidence reader | Class 0 pilots |
| **Run** | **L5 Governed** (SHIFTAI Coding Sprint) | Pull requests with an independent AI reviewer; protected main; login and row level security; backups, rollback, alerts; engineer check before go-live | **Release approver** | **Class 1** (real data, bounded) |
| Scale | L6 Gated | Automatic gates block bad changes; staging; scans | Bar-setter (engineer installs) | Class 2 |
| Scale | L7 Team | Shared company skills; staff contribute through the gates | Portfolio owner | Class 2 at volume |
| Scale | L8 Spec-driven | Separate builder, tester and reviewer, on different vendors | Product manager | Class 2, faster |
| Scale | L9 Owned platform | A named platform owner; agents do chores on events, within limits | Product leader | Class 3 |

**L5 is the graduation, not a ceiling.** It is the first level safe for real data. L6 and up need an engineer. There is no "dark factory" level: factories where nobody understands the code break after a few months.

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
