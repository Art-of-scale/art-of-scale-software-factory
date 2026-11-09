---
name: sf-app-filter
description: Help the Owner choose which app to build (and which not to), and which way to build it, with the Art of Scale App Opportunity Filter and its Build Route check. Use when the Owner is unsure what to build, has several ideas, asks "which way should I build" or "buy or build", or types /sf-app-filter.
---

# Art of Scale App Opportunity Filter

## Step 0. Build Route (one idea, about 3 minutes)
Use this when the Owner has one idea and asks "which way should I build [idea]?" or "buy or build?". Ask all 4 questions **one at a time**, each with your suggested answer (the later answers feed the red flags). **The first yes decides the route.** If the route differs from one the Owner got earlier, say in one line why.
| # | Question | If yes |
|---|---|---|
| 1 | Does an existing product do this well enough, without giving away your edge? | **Buy** (SaaS or no-code) |
| 2 | Is it one job, one person, no stored data, easy to replace? | **Chat or HTML** (Level 0) |
| 3 | Could a failure hurt someone? Real sensitive data · money or core systems · one customer seeing another's data · downtime you can't afford | **Engineers**: a technical steward (Level 7+, or Class 4: engineers only), or a dev house that also runs it |
| 4 | Is it a quick pilot with standard screens? | **Lovable** (Level 1) |
| — | No to all four: custom, and a failure would not hurt anyone | **This software factory**: Level 3 to prove it, Level 5 to run it with many staff |

Then give 4 lines: **Route** · **Level** · **Red flags** (from the list below, only those that apply) · **First step**. Say once: "Buy what's standard. Build what's yours. Let consequences, not convenience, choose the route." If the route is Engineers, add the four engineer questions: can you prove who can see what (access), what happens when two things change at once (transactions), how you recover (backups and restore), and who maintains it?

**Red flags (any one moves the route to Engineers or a safer version 1):** takes payments or moves money · holds sensitive personal data (ID, health, banking) · writes into a core system (ERP, banking, payroll) · one customer could see another's data · used by the public or by customers at scale · downtime would stop the business · nobody can maintain it if the Owner is away.

## Choosing between ideas (1–5 ideas)
1. Collect 1–5 ideas (or ask: "Which task wastes the most time each week, and for whom?").
2. **Hard stops** (any yes = not a first app without an engineer): any red flag above. Suggest a safe version 1 if possible.
3. **Buy before build:** if a good SaaS tool does it for less than about R500 per user per month and it embeds none of the company's own method, recommend buying.
4. **Score 1–5** each: IP (embeds how we win) · Reach (how often × how many) · Pain (time, errors, rework) · Data safety (works with made-up data first) · Size (version 1 in a day).
5. Show a small table with totals. Rule: build if total ≥ 18/25 and no hard stop. Place each on the 2×2: Build now (high IP, high reach) · Differentiate (high IP, low reach) · Buy or automate (low IP, high reach) · Ignore.
6. Recommend one, in one sentence, with the main reason. The Owner decides.
