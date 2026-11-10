# The Art of Scale Software Factory Ladder (V1.8)

Each level adds one capability, bought with one investment of your time or money. You never need to read code. The levels from L3 to L6 answer one question: **who checks the work, and with what proof?**

**Claim the lowest.** Score Make (how work is built and proved), Run (does the app stay up and recover) and Govern (who may change what). Your level is the lowest of the three. A pack installs capability; only proof earns a level.

| Stage | Level | What it is | Who checks the work | Edition |
|---|---|---|---|---|
| Try | **L0 Prompt app** | One page from one prompt, in your chat | You | Free |
| Try | **L1 Vibe-coded app** | Lovable or similar: a hosted app from prompts | You | Free |
| Try | **L2 Raw agent** | Claude Code or Cursor on a repo, with no method and no guards. Many people take this step. **The Starter Kit leapfrogs it.** | You, unguided | Not recommended |
| Build | **L3 Spec-driven factory** (Lab 9 lands here) | This factory: "grill me" → a contract with scenario tests → a technical spec → thin slices. Guards, the Coach, login and row level security per user | The builder agent checks itself; **you test by hand** | **Free ceiling** |
| Automate and run | **L4 Auto-QA factory** | Evals set before the build; independent reviewer and security-attacker agents in your existing subscription; a preview and pull request per change | Independent agents, against evals the builder cannot edit | SHIFTAI Coding Sprint (Upgrade Pack) |
| Automate and run | **L5 Evidence and governed factory** | Evals must show evidence (before/after video, screenshots). Protected main, backups with one restore tested, alerts, POPIA starter pack, engineer check | Agents with evidence; **you approve releases** from the evidence | SHIFTAI Coding Sprint: **the promise and the Certified Builder certificate** |
| Automate and run | **L6 Multi-lane QA** | 3 lanes: builder (vendor A), code reviewer (vendor B), browser-only tester. Required before L7; optional if you stay with internal apps | Three independent lanes | Sprint (stretch) |
| Scale | **L7 Gated** | Engineer-installed gates: staging, scans, code owners, signed releases | + an engineer | Engineer service |
| Scale | **L8 Orchestrated** | One chat runs many agents in parallel; it never merges or deploys | (productivity) | Engineer service |
| Scale | **L9 Team** | Certified staff builders contribute through the gates; a Factory Owner (certified at Level 9) runs the register and scorecard | (people) | Engineer service |
| Scale | **L10 Owned platform** | An engineer-led platform owner; the company runs on it | (core systems) | Engineer service |

There is no lights-off level. Class 4 apps (money, sensitive data at scale, writes into ERP, banking or payroll) stay with engineers at every level.

## Certification (Level 5 to Level 10)
A builder is certified by level, from Level 5 to Level 10, when that level's entry checks are observed on their own factory. There is no certificate below Level 5.
- A certificate covers the date it was issued. It does **not** guarantee the builder keeps complying: that needs separate, current evidence and an audit.
- It does **not** warrant outcomes. A certified builder can still be sloppy, make mistakes, or lack experience and judgement. Each app still needs its own review and approval.

## App classes (what you may build, and on what data)
| Class | Who uses it | Data | If it fails |
|---|---|---|---|
| 0 Sandbox | You and testers | Made-up only | Nothing |
| P Personal | You only | Your own non-sensitive work data | Only you notice |
| N Shared utility | A few colleagues | No personal or sensitive data | People work around it |
| 1 Team | Many staff, for their work | Company data, nothing sensitive | It hurts, but core operations continue |
| 2 Customer | Customers or partners | Customer business data | Lost trust or revenue |
| 3 Core | The company runs on it | Customer data at volume | Core operations stop |
| 4 Critical | Money, sensitive data at scale, core-system writes | Sensitive | Material loss: engineers only |

**Lowest level allowed:** 0 → L0 · P → L0 (L1–L2 with care) · N → L3 · 1 → L5 (pilot from L3: about 10 named staff, each logs in with their own work email and sees only their own rows; no personal data about other people; weekly export; Business Owner sign-off) · 2 → L7 · 3 → L10 · 4 → engineers only.

## Entry tests (all must be yes)
- **L3:** a change goes live within ~5 min · the app reads and writes its database · users log in and every table has per-user row level security (no `LAB ONLY` policy) · the break-it test passed (user A cannot see or change user B's rows) · every change has an approved contract with scenario tests ("When this, then that") and a technical spec · the agent reaches one repo only · only the public key in Vercel · you know how to undo a bad change (Vercel → Deployments → Instant Rollback).
- **L4 (Sprint):** evals (automated tests from your scenario tests) are written before the build and the builder may not edit them · an independent reviewer and a security attacker check Medium and High changes · every change has a preview link and a pull request you merge.
- **L5 (Sprint):** every change shows before/after evidence · main is protected · backups on and one restore tested · error alerts reach a named person · POPIA register, purpose and user notice · engineer check passed · you can explain the app from `docs/SYSTEM.md` in 2 minutes.

## Art of Scale Production-Ready Gate (L5, before real staff data)
- [ ] Users log in; roles where needed; row level security on every table
- [ ] No keys in code or chat; service-role key only in server settings, if used at all
- [ ] Main protected; pull request + AI review + your merge for every change; migrations for database changes
- [ ] Evals pass with evidence; you clicked through as each user type
- [ ] Backups on; one restore tested; you know how to roll back
- [ ] Error alerts reach you; a named owner and a backup owner
- [ ] Paid plans where terms require (Vercel Hobby is non-commercial); the database will not pause
- [ ] Personal data listed; purpose stated; POPIA notice shown to users
- [ ] No hard stop (payments, sensitive data at scale, core-system writes). If one crept in, call an engineer.
