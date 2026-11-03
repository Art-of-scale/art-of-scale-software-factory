---
name: sf-explain
description: Explain or teach your last output (or any term, error, plan or choice) to a non-technical founder so they can make or approve a decision. Use when the Owner says "explain", "teach me", "what does that mean", "in plain English", "ELI5", "why?", "I don't understand", "simpler", "deeper", or /sf-explain.
---

# Explain and Teach

The Owner is a smart, busy founder who does not read code. They need to **understand enough to decide**, not to become an engineer. Explain what you last said or did, unless they point at something else.

## Pick the mode from their words
| They say | Mode | Goal | Length |
|---|---|---|---|
| "explain", "what does that mean", "why?", "plain English" | **Explain** | Decide or approve now | ≤ 150 words + options table if a choice exists |
| "teach me", "how does that work", "I want to understand" | **Teach** | Build lasting understanding | ≤ 350 words + one check question |
| "simpler", "ELI5" | **Simpler** | Same point, one level down | Half the words; one analogy; no terms |
| "deeper", "more detail" | **Deeper** | One level up | Add the how; still no code unless asked |

## Explain mode: use this shape
1. **In one line:** what it is or what happened.
2. **Why it matters to you:** the effect on users, cost, risk, speed or data. Use their app's words.
3. **Like in your business:** one analogy from running a company (a warehouse, a sales pipeline, an approval process, a filing system).
4. **Your options** (only if a decision exists):
   | Option | What happens | Time / cost | Risk | Can we undo it? |
   |---|---|---|---|---|
5. **My recommendation:** one option and the main reason.
6. **What I need from you:** a yes/no or a choice, in one line.

## Teach mode: add these
- **The idea in 3 steps**: how it works, with an example from **their** repo or app.
- **Where it lives**: the file or screen, by name. Say "you never need to open it" if that is true.
- **One check question**, for example "So if the build fails, does your live site break?" Confirm or correct their answer kindly.
- Add the term and a one-line meaning to `docs/GLOSSARY.md` (create it if missing) and commit it with the next change.

## Rules
- **Decision first.** If the explanation leads to a decision, end with it. Never leave the Owner with a lesson and no next step.
- **Say if it is a one-way or two-way door.** Most things can be undone (two-way: decide fast). Deleting data, real users, payments, public launches and sharing keys are one-way: slow down and say so.
- **No jargon without a meaning.** The first time you use a term, give a 5-word meaning in brackets, for example "deploy (put the new version live)".
- **No code** unless they ask. Describe what code does, not how it is written.
- **Be honest about uncertainty.** "I'm not sure; here is how we find out: …"
- **Don't talk down.** They run a company. Use business logic: cost, risk, return, reversibility.
- **Stay short.** If it needs more, offer "Want me to teach this properly?" instead of writing more.

## Common things founders ask about (ready analogies)
| Term | One line | Business analogy |
|---|---|---|
| Repo | The folder that holds every version of your app's code | Your company's filing cabinet with full history |
| Commit / push | Save a version / send it to GitHub | Signing and filing a document |
| Deploy | Put the new version live | Opening the doors after a refit |
| Branch / pull request | A safe copy to change / a request to merge it | A draft contract and the sign-off meeting |
| Preview link | A private live copy of a change | A show-house before the estate opens |
| Database / table | Where the app stores its information / one list in it | A set of spreadsheets the app reads and writes |
| Row level security | Rules for who may see each row | Staff can only open their own client files |
| Env var / key | A setting or password stored outside the code | The safe's combination, kept off the shop floor |
| Migration | A recorded change to the database structure | A minuted change to your filing system |
| Test | A check that runs automatically | A checklist your QA team runs on every batch |
| Build failed | The new version could not be assembled; the live site is unchanged | The new stock failed inspection, so the shelves keep the old stock |
