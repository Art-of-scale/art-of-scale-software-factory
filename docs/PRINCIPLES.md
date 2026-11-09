# Principles (Art of Scale)

**Your role: the town planner, not the bricklayer.** You set the boundaries, rules and taste, and you verify. The agent lays the bricks. Your edge is not typing speed; it is judgement and checking.

## The new physics of building (why the factory works this way)
Code was scarce, so we bought software and bent the business to fit it. Now agents write, check and ship code in minutes. **Your know-how is the new spec.** Three laws follow:
1. **Your attention is the constraint.** Measure accepted work per hour of your attention, not lines of code.
2. **Subscription, not meter.** Build on a flat-rate plan (your own plan, within its limits). Keep pay-per-use for features inside your app.
3. **Rent the brain, own the factory.** Cloud models do the work. Your rules and files stay yours and move with you.
*Tokens are cheap. Your hours are not.*

## The Art of Scale Factory Loop: every change
**Capture → Shape → Plan → Build → Prove → Ship → Learn.** Each step leaves a file in the repo. Acceptance criteria are scenario tests, "When this, then that" (Level 3); they become evals written before the build (Level 4).

## 10 Principles of Agentic Coding (how you work with the agent)
1. **Problem before feature.** Who has the pain; what does better look like?
2. **Let it interview you.** Say "grill me". The agent asks one question at a time and writes the contract; you correct and approve.
3. **Plan before build.** Ask: what could break, and what's the riskiest step?
4. **One small slice at a time.** See it live, then the next.
5. **Your know-how is the spec.** Give it what it can't see: your users, rules, words, examples and taste.
6. **Evidence, not assurance.** Test output, screenshots, the live link. Never "should work". Risky changes get independent checks: you at Level 3; a fresh reviewer and a security attacker from Level 4; before/after evidence at Level 5.
7. **Test like your user.** Click through the live link; report steps + screenshot.
8. **A mistake made twice becomes a rule.** It goes into AGENTS.md §7.
9. **Fresh session, clear task.** Circuit breaker: after three failed tries, stop, explain the options, reset.
10. **You own the decisions; the factory protects your attention.** Every task ends done, failed or blocked, never "unknown". Follow at most 3 sessions at once. Say "explain" for plain-English options.

## 10 Principles of a Software Factory (how you run the system)
1. **One app, one repo, one owner.**
2. **The repo is the memory.** Contracts, specs, the system map, decisions and the changelog live in `docs/`.
3. **The factory carries the method, not your head, and not your vendor.** AGENTS.md, skills, background guards, the Coding Coach: plain files any good agent can run. Own your factory; rent your model.
4. **Least access, no secrets in code or chat.** One repo, one lab database, public key only. The key guard blocks the rest.
5. **Subscription and cloud.** Flat-rate plans, frontier models in the cloud, files you own.
6. **Made-up data until the gate.**
7. **Machines check first, you check last.** The build check and the builder's own scenario checks run before you look (Level 3); from Level 4, evals and independent agents too.
8. **Nothing reaches users without your approval** (Level 5).
9. **Everything is reversible.** History, previews, migrations, backups, rollback.
10. **Know your ceiling. Keep the lights on.** Payments, sensitive data at scale, core-system links: call an engineer. If you can't explain your app from SYSTEM.md, simplify. Lights-off factories fail.

Method: **spec-driven development, founder edition**, built on Anthropic's AI-native SDLC playbook. You approve the contract (what and why); the agent owns the technical spec (how).

Sources: Anthropic, *The AI-native SDLC playbook* (Claude Academy) and *Claude Code best practices*; S. Willison, *Vibe engineering*; A. Osmani, *How to write a good spec for AI agents*; adapted by Art of Scale for non-technical founders.
