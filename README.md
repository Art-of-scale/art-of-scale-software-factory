# Art of Scale Software Factory

Your own software factory: your code, your live app, your database, and the **Art of Scale Coding Coach** in every session.
For founders and leaders who don't write code. Part of the Art of Scale Factory Playbook.

## Load your factory (about 10 minutes)

**Before you click:** sign in to GitHub in this browser. Right-click the button and choose **Open link in new tab**, so you keep this page.

[![Load my Art of Scale Software Factory](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FArt-of-scale%2Fart-of-scale-software-factory&project-name=my-software-factory&repository-name=my-software-factory&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22supabase%22%2C%22productSlug%22%3A%22supabase%22%7D%5D)

[Load my Art of Scale Software Factory (text link)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FArt-of-scale%2Fart-of-scale-software-factory&project-name=my-software-factory&repository-name=my-software-factory&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22supabase%22%2C%22productSlug%22%3A%22supabase%22%7D%5D)

1. In the new tab, sign in to Vercel **with GitHub**. If Vercel says you already have an account with this email: sign in the way you did before (for example Google), then Account Settings → Authentication → **Connect GitHub**, and click the Load button again.
2. Choose **GitHub** as the Git provider. Keep the repo **private**. If GitHub asks to install Vercel, allow it (you can narrow it to this one repo later).
3. When asked, add **Supabase** (a new project, for made-up data only). No credit card is needed.
4. Click **Deploy**. Open your live link: the status board shows Code, Hosting, Database and Coach.
5. Open **claude.ai/code** in your browser (it always runs in the cloud; nothing runs on your computer) → **Connect GitHub**. This takes two steps: **Authorise** the Claude GitHub App, then **Install** it. On the install screen choose **Only select repositories** → `my-software-factory`. Then pick the repo and paste:

> Start my software factory. Read CLAUDE.md, install the factory if it is not installed yet, then run the sf-start skill and guide me step by step.

The first line back must say **"Guards: live"**.

Later, you can also use the Claude desktop app (Code tab, **cloud** environment): it adds an app preview pane and notifications.

No Supabase step in the Vercel flow? After the deploy: Vercel → your project → **Storage** (or Infrastructure → Storage) → **Connect database** → Supabase → Create. Then redeploy.

Repo not visible in Claude Code? github.com/settings/installations → Claude → Configure → add the repo. GitHub may ask you to confirm your email first.

## Rules
Made-up data only until the Art of Scale Production-Ready Gate. Never paste keys or passwords into chat. Only the public Supabase key goes into Vercel.

© Art of Scale. Method: spec-driven development, founder edition, built on Anthropic's AI-native SDLC playbook.
