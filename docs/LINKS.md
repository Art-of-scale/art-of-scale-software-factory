# Direct links and hand-holding standard (V2.2, checked 10 Nov 2026)

The Owner is not technical. Every instruction that sends them to another website follows this standard.

## The hand-holding standard (every step, every time)
1. **One action per step.** Number the steps and give the true count ("Step 2 of 5").
2. **A direct link for every step**, from the table below, so the Owner lands on the exact page. Never "go to settings and find…".
3. **Name the exact button or field**, in bold, as the page shows it, and where it is on the page ("top right", "left menu", "section User Signups").
4. **Say what they should see** after the click ("You now see a green 'Success'").
5. **Say what to do if it looks different**: "If you do not see this, send me a screenshot." Never guess another menu.
6. **Wait** for the Owner to say "done" (or paste the result) before the next step.
7. **Fill in the Owner's own names**: replace `<team>`, `<project>` and `<owner>` with their real values. Ask once for the address in their browser bar (it is not a secret) and reuse it.
8. **Never ask for a secret.** Links lead to pages; the Owner types secrets only into the service itself.
9. **Say first where they should land.** Before each step, describe the page they will see when they are in the right place (its title and one thing on it), and show a picture if one exists (`docs/img/`).
10. **Everyday browser.** Ask the Owner to open links in the browser where they already signed in (Chrome, Edge or Safari), not a browser inside another app: right-click → **Copy link** → paste into the address bar. A new browser knows none of their logins and adds two-factor checks.

## Direct links
`_` in a Supabase link means "your project": Supabase asks which project if you have more than one. Pages marked *pattern* follow a stable URL pattern, but the vendor docs do not list them; if one fails, give the menu path and ask for a screenshot.

### GitHub
| Page | Link |
|---|---|
| Sign up | https://github.com/signup |
| **Load my factory (direct; use this, not the GitHub page)** | https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FArt-of-scale%2Fart-of-scale-software-factory&project-name=my-software-factory&repository-name=my-software-factory&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22supabase%22%2C%22productSlug%22%3A%22supabase%22%7D%5D |
| The Art of Scale template page on GitHub | https://github.com/Art-of-scale/art-of-scale-software-factory |
| Create a new empty repo (zip route) | https://github.com/new |
| Apps installed on your account (Claude, Vercel): narrow to one repo | https://github.com/settings/installations |
| Apps you authorised (revoke) | https://github.com/settings/applications |
| Your email addresses (verify) | https://github.com/settings/emails |
| Install the Claude GitHub App | https://github.com/apps/claude/installations/new |
| Install the Vercel GitHub App | https://github.com/apps/vercel/installations/new |
| Add a backup person to your repo | https://github.com/<owner>/<repo>/settings/access (*pattern*) |
| Create a free company organisation | https://github.com/account/organizations/new |

### Vercel
| Page | Link |
|---|---|
| Sign up (choose **Continue with GitHub**) | https://vercel.com/signup |
| Log in | https://vercel.com/login |
| Your projects | https://vercel.com/dashboard |
| Login connections (add GitHub to an account made with Google): profile picture → **Settings** → **Authentication** | https://vercel.com/account/authentication |
| Your project | https://vercel.com/<team>/<project> (*pattern*) |
| Deployments (find **Production**, ⋮ → **Instant Rollback**) | https://vercel.com/<team>/<project>/deployments (*pattern*) |
| Instant Rollback, fastest: project page → **Production Deployment** tile → **Instant Rollback** → **Confirm Rollback** | https://vercel.com/<team>/<project> (*pattern*) |
| Environment variables (settings the app reads) | https://vercel.com/<team>/<project>/settings/environment-variables (*pattern*) |
| Storage (the Supabase database) → **Open in Supabase** | https://vercel.com/<team>/<project>/stores (*pattern*) |

### Supabase
| Page | Link |
|---|---|
| Your projects | https://supabase.com/dashboard/projects |
| SQL Editor, new query (paste the SQL → **Run**) | https://supabase.com/dashboard/project/_/sql/new |
| Login settings: **Sign In / Providers** ("Confirm email": look in the **User Signups** section at the top; on some accounts it is inside the **Email** provider panel) | https://supabase.com/dashboard/project/_/auth/providers |
| Users (see who signed up) | https://supabase.com/dashboard/project/_/auth/users |
| Table Editor (look at your rows) | https://supabase.com/dashboard/project/_/editor |
| Project URL and publishable key: the **Connect** dialog | https://supabase.com/dashboard/project/_?showConnect=true |
| API keys (publishable key; never copy the secret key) | https://supabase.com/dashboard/project/_/settings/api-keys |
| Pause a practice project (free plan: 2 active) | https://supabase.com/dashboard/project/_/settings/general |

Note: Supabase has no separate "Settings → API" page any more. Use **Connect** or **API Keys**.

### Claude
| Page | Link |
|---|---|
| Claude Code in the browser (pick your repo) | https://claude.ai/code |
| Connectors (GitHub link) | https://claude.ai/settings/connectors |
| New chat (Lab Guide, Session 1) | https://claude.ai/new |

### Lovable (Lab Part 2.2)
| Page | Link |
|---|---|
| Start | https://lovable.dev |

### Art of Scale
| Page | Link |
|---|---|
| Free AI Leverage X-Ray | https://xray.artofscale.io/ai-leverage-xray/ |
| SHIFTAI Coding Sprint | https://artofscale.io/coding-sprint/ |

## Keep this page true
When the Owner finds a link or a button that has moved, fix this page in the same session, and add the date. A wrong link costs a founder 10 minutes; a right one costs nothing.
