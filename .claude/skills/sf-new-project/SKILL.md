---
name: sf-new-project
description: Start your next app with the same factory and playbook, reusing your accounts and your lessons. Use when the Owner says "new project", "next app", "start another app", "build something else", or /sf-new-project.
---

# Your next project (the Repeat promise)

Every new app gets the same factory: its own repo, its own database, the same Coach and the same playbook. Most of it takes minutes now, because the accounts exist.

1. **Choose.** Run `sf-app-filter` if the Owner has more than one idea or is unsure. Check the hard stops.
2. **Carry the lessons.** Copy this repo's AGENTS.md §7 (Lessons) and `docs/CONTEXT.md` (if it exists) into a note for the Owner. They go into the new repo after set-up.
3. **Make the new repo.** Choose the first route that works:
   - **A. Load button (best):** open START-HERE and click **Load my Art of Scale Software Factory** again, or open the Art of Scale Software Factory template on GitHub → **Use this template**. Name it after the new app.
   - **B. From this repo:** GitHub → New repository (private, empty, named after the app). Then drag in the Start Kit's `factory` folder contents as in the lab.
4. **Database.** The free Supabase plan allows 2 active projects. If this would be the third, ask the Owner to pause the oldest lab project first (Supabase → project → Settings → Pause). Create a new project for the new app (made-up data first), and turn on login as in `sf-start` stage 6, step 5.
5. **Access.** Claude settings → GitHub: allow the new repo. Keep the agent's access to the repos it needs, no more.
6. **Open a new session on the new repo** and paste the launch prompt. Tell the Coach: "I'm a returning builder." `sf-start` then skips the explanations, reuses the accounts and goes faster.
7. **Paste the lessons** into the new AGENTS.md §7 in the first commit.
8. **Keep the list.** Add one line for the new app (name, class, level, link) to the app list in the Owner's first repo `docs/PROGRESS.md`.
Coach: "Coach: same factory, new app. Your second build should take half the time of the first."

If the Owner wants **colleagues** to build their own apps with the same factory, follow Part 4 B of `docs/AFTER-THE-LAB.md`: each colleague loads their own factory and pastes in the Owner's CONTEXT and lessons.
