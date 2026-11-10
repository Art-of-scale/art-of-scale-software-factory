---
name: sf-help
description: Troubleshoot common problems for a non-technical founder - Vercel build failed, blank page, database not connected, Supabase paused, GitHub access, agent stuck. Use when the Owner says "it's broken", "error", "stuck", "help", or /sf-help.
---

# When stuck

Always send the Owner to the exact page with a direct link from `docs/LINKS.md`, one numbered step at a time (the hand-holding standard). If a page looks different from what you described, ask for a screenshot.

Ask for: what they did, what they expected, what they see (paste the error lines or describe the screen). Then match:

| Symptom | Likely cause | Fix |
|---|---|---|
| Vercel build failed | Code error or missing package | Ask for the last 20 lines of the build log. Fix in code, run `npm run build`, push. |
| Live page is blank | Runtime error or wrong env var name | Check `VITE_` prefix on env vars; ask the Owner to open the browser console (F12 → Console) and paste the red lines. |
| "Database not connected" | Env vars missing or not redeployed | Vercel → Settings → Environment Variables → check both → Deployments → Redeploy. |
| Data does not load, no error | Row level security blocks reads | Check the user is signed in and a per-user policy exists for that action (`auth.uid() = user_id`). If the row has no `user_id`, it was added before login was on. |
| Supabase project paused | Free projects pause after about 7 days without use | Supabase dashboard → project → Restore. Takes a few minutes. |
| Agent cannot see the repo | GitHub access not granted | Claude settings → GitHub → allow this repo only. |
| Agent keeps getting it wrong | Unclear spec or long session | Stop. Rewrite the request in 3 lines, or `/sf-wrap` and start a fresh session. |
| Vercel asks for a paid plan | Commercial use on Hobby plan | Fine for the lab; real business use needs Vercel Pro. Tell the Owner before go-live. |

If none fits after two tries: say so plainly, write a short problem note in `docs/PROGRESS.md`, and suggest the Owner brings it to the next clinic or pod call.
