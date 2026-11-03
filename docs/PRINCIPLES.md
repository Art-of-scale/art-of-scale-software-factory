# Principles (Art of Scale)

**Your role: the town planner, not the bricklayer.** You set the boundaries, rules and taste, and you verify. The agent lays the bricks. Your edge is not typing speed; it is judgement and checking.

## The Art of Scale Factory Loop: every change
**Capture → Shape → Plan → Build → Prove → Ship → Learn.** Each step leaves a file in the repo. Acceptance criteria are Given / When / Then lines (Level 3); they become tests before the build (Level 4).

## 10 Principles of Agentic Coding (how you work with the agent)
1. **Problem before feature.** Who has the pain; what does better look like?
2. **Let it interview you.** Say "grill me". The agent asks one question at a time and writes the contract; you correct and approve.
3. **Plan before build.** Ask: what could break, and what's the riskiest step?
4. **One small slice at a time.** See it live, then the next.
5. **Give it what it can't see.** Your users, rules, words, screenshots, examples.
6. **Evidence, not assurance.** Test output, screenshots, the live link. Never "should work". Risky changes get independent checks (a fresh reviewer, a first-time user).
7. **Test like your user.** Click through the live link; report steps + screenshot.
8. **A mistake made twice becomes a rule.** It goes into AGENTS.md §7.
9. **Fresh session, clear task.** Circuit breaker: after three failed tries, stop, explain the options, reset.
10. **You own the decisions; the factory protects your attention.** Every task ends done, failed or blocked, never "unknown". Follow at most 3 sessions at once. Say "explain" for plain-English options.

## 10 Principles of a Software Factory (how you run the system)
1. **One app, one repo, one owner.**
2. **The repo is the memory.** Contracts, specs, the system map, decisions and the changelog live in `docs/`.
3. **The factory carries the method, not your head, and not your vendor.** AGENTS.md, skills, background guards, the Coding Coach: plain files any good agent can run. Own your factory; rent your model.
4. **Least access.** One repo, one lab database, public key only.
5. **Secrets never in code or chat.**
6. **Made-up data until the gate.**
7. **Prove it, then ship it.**
8. **Nothing reaches users without your approval** (Level 5).
9. **Everything is reversible.** History, previews, migrations, backups, rollback.
10. **Know your ceiling. Keep the lights on.** Payments, sensitive data at scale, core-system links: call an engineer. If you can't explain your app from SYSTEM.md, simplify. Lights-off factories fail.

Method: **spec-driven development, founder edition**, built on Anthropic's AI-native SDLC playbook. You approve the contract (what and why); the agent owns the technical spec (how).

Sources: Anthropic, *The AI-native SDLC playbook* (Claude Academy) and *Claude Code best practices*; S. Willison, *Vibe engineering*; A. Osmani, *How to write a good spec for AI agents*; adapted by Art of Scale for non-technical founders.
