# After the Lab: your Level 3 playbook

The Lab gets your factory loaded and one feature live. This page takes you from there to a finished Level 3 app, then to your next apps, then to your team.
The Coding Coach follows this page. In your coding session, type **"what now after the lab"** (or any line in the "Say" column below) and it takes you to the right part.

| Part | Goal | Say to the Coach | Time |
|---|---|---|---|
| 1 | Finish your Level 3 build | "finish level 3" | Week 1: 2–4 hours |
| 2 | Keep building your app | "continue my build" | Weeks 2–4: two 60-minute sessions a week |
| 3 | Build your 2nd and 3rd app with the same factory | "new project" | About half the time of your first app |
| 4 | Your team installs the same factory | "my team wants this" | 30–45 minutes for each colleague |

## Part 1 · Finish your Level 3 build (week 1)
Level 3 is done when every entry test in `docs/LADDER.md` is ✓, with proof. The Coach checks them with `/sf-level` and ticks your Passport. Most founders leave the Lab with 3 to 5 items still open.

| # | Item | How you do it | Time |
|---|---|---|---|
| 1 | Live link | Open your link. The status board shows Code ✓, Hosting ✓, Database ✓ | 2 min |
| 2 | Login on | Sign up with a made-up email and password. Supabase "Confirm email" stays OFF for now: its built-in email only reaches your project's own team members | 5 min |
| 3 | Per-user security | The Coach shows the policy lines in plain English. No `LAB ONLY` policy is left | 5 min |
| 4 | Break-it test | Log in as user A, add a row. Log in as user B in a private window: B must not see or change A's row | 10 min |
| 5 | Undo | Find Vercel → Deployments → Instant Rollback. You do not need to click it, only to know where it is | 2 min |
| 6 | Contract and spec for every change | Each change in `docs/intent/` has scenario tests ("When this, then that") you approved | 0–30 min to back-fill |
| 7 | Version 1 | The smallest version a real user would use, live, tested by you by hand | 1–3 hours |
| 8 | System map | You can explain the app from `docs/SYSTEM.md` in 2 minutes | 10 min |
| 9 | Wrap | `/sf-wrap` writes `docs/PROGRESS.md`; you see "Level 3 ✓" on the Passport | 3 min |

**Say:** "finish level 3". The Coach lists only the open items, fixes one at a time, and ends with `/sf-level`.

## Part 2 · Keep building your app (weeks 2–4)
One session = one task. A fresh session each time keeps the agent sharp.

| Step | You do | The Coach does |
|---|---|---|
| Start | Open a new session on your repo and say "continue my build" | Reads `docs/PROGRESS.md` and shows the next 1–3 tasks |
| Choose | Pick one task | Says the risk tier (Low, Medium, High) |
| Capture | Say "grill me" | Asks one question at a time, writes the contract with scenario tests |
| Approve | Approve the contract (not the technical detail) | Writes the spec and a 3–5 line plan |
| Build | Write the next request while it builds | Builds one thin slice, checks every scenario test, shows ✓ / ✗ |
| Test | Test on the live link like your user, and try to break it | Fixes what you found |
| Wrap | Say `/sf-wrap` | Updates PROGRESS, CHANGELOG and SYSTEM; asks for one lesson |

**Rhythm:** two 60-minute sessions a week beat one long push a month. At most 3 sessions at once.
**Data:** your own non-sensitive work data is fine for a Personal (P) or Shared utility (N) app. No personal data about other people, nothing sensitive. If the app needs more, the Coach stops and gives you your options (see "Class gate" below).
**Where Level 3 breaks:** when testing by hand takes longer than building, or more than about 10 named staff want the app. That is the Level 4 trigger (SHIFTAI Coding Sprint).

## Part 3 · Your 2nd and 3rd app, with the same factory
Every app gets its own repo, its own database and the same factory. Your accounts already exist, so it is faster.

1. **Choose.** Say "new project". The Coach runs the Build Route and the app filter. Some ideas should be bought, some need engineers.
2. **Carry your lessons.** The Coach copies your AGENTS.md §7 lessons and your `docs/CONTEXT.md` (who you are, your users, your words) into a note.
3. **Load a new factory.** Click **Load my Art of Scale Software Factory** again (or GitHub → the Art of Scale template → **Use this template**). Name the repo after the new app.
4. **Database.** The free Supabase plan allows 2 active projects. For a third, pause your oldest practice project first (Supabase → project → Settings → Pause).
5. **Access.** claude.ai → Settings → GitHub: allow the new repo. The agent gets the repos it needs, no more.
6. **Start.** Open a new session on the new repo, paste the launch prompt and say: "I'm a returning builder." The Coach skips the explanations.
7. **Paste your lessons** into the new AGENTS.md §7 and your context into `docs/CONTEXT.md`, in the first commit.

**Your 3rd app and later:** the same 7 steps. Keep a one-line list of your apps, their class and their level in your first repo's `docs/PROGRESS.md`, so you always know what you run.

## Part 4 · Your team installs the same factory
Two different things. Decide which one you mean.

**A. Colleagues use your app.** They open your link and sign up with their work email and a password. Each sees only their own rows. The app's class sets how many may use it:

| Class | Who may use it | Level needed |
|---|---|---|
| N Shared utility | A few colleagues, no personal or sensitive data | Level 3 (you are here) |
| 1 Team, as a pilot | About 10 named staff · login and per-user security · no personal data · a weekly export · a Business Owner signs it off | Level 3 or 4 |
| 1 Team, full use | Many staff, real company data | Level 5 (SHIFTAI Coding Sprint) |

**B. Colleagues build their own apps.** Each colleague installs their own factory, the same way you did:
1. They create their own GitHub account (or use the company's GitHub organisation, if you made one) and their own Vercel and Supabase accounts.
2. They click **Load my Art of Scale Software Factory** and follow the same steps (a facilitator-free version is in `START-HERE.html`, "Ten steps").
3. You share your house rules: send them your `docs/CONTEXT.md` and your AGENTS.md §7 lessons. They paste them into their own repo in the first commit.
4. Their apps follow the same class rules. Personal (P) and Shared utility (N) apps are fine at Level 3. Anything bigger goes through the class gate.

**Tip:** a free GitHub organisation for your company keeps every app's repo owned by the company, not by one person. Ask the Coach to "explain GitHub organisations" before you set one up.

**What stays one person per repo:** at Level 3 each app has one builder. You may invite one named **backup person** to your repo (GitHub → Settings → Collaborators) so the app keeps running if you are away; write their name in AGENTS.md §1. Several builders changing the same app through shared gates, with a register of certified builders, is **Level 9 (Team factory)**. That is an engineer service.

## Class gate (what the Coach does when an app outgrows Level 3)
If you ask for something the app's class does not allow at your level, the Coach stops and gives you options. It never quietly builds it.

| You ask for | The Coach's options |
|---|---|
| Personal data about other people, or anything sensitive | 1. Use made-up or reduced data and stay Class P or N · 2. Upgrade the factory to Level 5 (SHIFTAI Coding Sprint): evidence, backups, POPIA pack, engineer check |
| More than about 10 named staff | 1. Run it as a Class 1 pilot (the pilot rules above) · 2. Level 5 for full Team use |
| Customers or partners use it | Level 7 and up (engineer-installed gates). Build a made-up-data demo at Level 3 meanwhile |
| Payments, ID, health or banking data, or writes into core systems | Class 4: engineers only, at every level. Art of Scale can help you decide build, buy or engineer in a 30-minute call |
