// Art of Scale Factory Passport (V1.8): where your factory is on the Ladder, and the next steps.
// The repo is the record. Machine checks tick what they can prove; the Coach ticks the rest in docs/PASSPORT.md.
// Used by vite.config.ts (live status page) and by the session start (`node scripts/passport.mjs`).
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const LEVELS = [
  { n: 3, edition: 'free', name: 'Spec-driven factory', items: [
    ['l3-factory', 'Factory installed: rules, memory and the Coding Coach'],
    ['l3-guards', 'Guards in place: key guard, command guard, honest-code check, build check'],
    ['l3-coach', 'The Coach has started your factory'],
    ['l3-contract', 'First contract approved, with scenario tests ("When this, then that")'],
    ['l3-spec', 'Every change has a contract and a technical spec'],
    ['l3-live', 'App live on its own web address'],
    ['l3-db', 'Database connected (public key only)'],
    ['l3-login', 'Users log in; every table has per-user row level security'],
    ['l3-breakit', 'Break-it test passed: user A cannot see or change user B\'s rows'],
    ['l3-rollback', 'You know how to undo a bad change (Vercel Instant Rollback)'],
    ['l3-v1', 'Version 1 shipped and in the changelog'],
  ] },
  { n: 4, edition: 'sprint', name: 'Auto-QA factory', items: [
    ['l4-evals', 'Evals (automated tests from your scenario tests) written before the build'],
    ['l4-review', 'An independent reviewer checks Medium and High changes'],
    ['l4-attack', 'A security attacker checks Medium and High changes'],
    ['l4-preview', 'Every change gets a preview link and a pull request you merge'],
  ] },
  { n: 5, edition: 'sprint', name: 'Evidence and governed factory', items: [
    ['l5-evidence', 'Every change shows before/after evidence (video or screenshots)'],
    ['l5-ci', 'Factory checks run on every pull request'],
    ['l5-main', 'Main is protected: pull request and your merge'],
    ['l5-backup', 'Backups on, and one restore tested'],
    ['l5-alerts', 'Error alerts reach a named person'],
    ['l5-popia', 'POPIA: personal data listed, purpose stated, notice shown'],
    ['l5-engineer', 'Engineer check before go-live'],
    ['l5-gate', 'Production-Ready Gate passed'],
  ] },
]

const read = (root, p) => { try { return readFileSync(join(root, p), 'utf8') } catch { return '' } }
const list = (root, p) => { try { return readdirSync(join(root, p)) } catch { return [] } }

function machineChecks(root, env) {
  const skills = list(root, '.claude/skills').filter((d) => existsSync(join(root, '.claude/skills', d, 'SKILL.md')))
  const hooks = ['prompt-guard.py', 'write-guard.py', 'bash-guard.py', 'honesty-check.py', 'build-check.sh']
  const intents = list(root, 'docs/intent').filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  const specs = list(root, 'docs/specs').filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  const pkg = read(root, 'package.json')
  const tests = list(root, 'src').concat(list(root, 'tests')).filter((f) => /\.test\.(t|j)sx?$/.test(f))
  const sql = list(root, 'supabase/migrations').map((f) => read(root, 'supabase/migrations/' + f)).join('\n').toLowerCase()
  return {
    'l3-factory': existsSync(join(root, 'AGENTS.md')) && existsSync(join(root, 'CLAUDE.md')) && skills.length >= 10,
    'l3-guards': hooks.every((h) => existsSync(join(root, '.claude/hooks', h))),
    'l3-coach': existsSync(join(root, 'docs/PROGRESS.md')),
    'l3-contract': intents.length >= 1,
    'l3-spec': intents.length >= 1 && specs.length >= intents.length,
    'l3-live': env.VERCEL === '1',
    'l3-db': Boolean(env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL),
    'l3-login': sql.includes('row level security') && sql.includes('auth.uid()') && !sql.includes('lab only'),
    'l3-v1': /^\s*-?\s*20\d\d-\d\d-\d\d/m.test(read(root, 'docs/CHANGELOG.md')),
    'l4-evals': /"test"\s*:/.test(pkg) && tests.length >= 1,
    'l5-ci': existsSync(join(root, '.github/workflows/ci.yml')),
  }
}

function coachTicks(root) {
  const ticks = new Set()
  for (const m of read(root, 'docs/PASSPORT.md').matchAll(/^\s*-\s*\[[xX]\]\s*([a-z0-9-]+)/gm)) ticks.add(m[1])
  return ticks
}

export function computePassport(root = '.', env = process.env) {
  const auto = machineChecks(root, env)
  const ticks = coachTicks(root)
  const levels = LEVELS.map((l) => {
    const items = l.items.map(([id, label]) => {
      const byMachine = auto[id] === true
      const done = byMachine || ticks.has(id)
      return { id, label, done, by: byMachine ? 'machine' : done ? 'coach' : (id in auto ? 'machine' : 'coach') }
    })
    return { n: l.n, name: l.name, edition: l.edition, items, done: items.filter((i) => i.done).length, total: items.length }
  })
  let reached = 2
  for (const l of levels) { if (l.done === l.total && reached === l.n - 1) reached = l.n }
  const working = levels.find((l) => l.n === reached + 1) || null
  const next = working ? working.items.filter((i) => !i.done).slice(0, 3).map((i) => i.label) : []
  return { reached, reachedName: levels.find((l) => l.n === reached)?.name || 'Raw agent', working: working ? { n: working.n, name: working.name, edition: working.edition } : null, next, levels }
}

// Session start: print a short summary for the Coach.
if (process.argv[1] && process.argv[1].endsWith('passport.mjs')) {
  const p = computePassport('.')
  const lines = [`Factory Passport: Level ${p.reached} (${p.reachedName}) reached.`]
  if (p.working) lines.push(`Next, for Level ${p.working.n} (${p.working.name}${p.working.edition === 'sprint' ? ', SHIFTAI Coding Sprint edition' : ''}): ` + p.next.map((s, i) => `${i + 1}) ${s}`).join('  '))
  else lines.push('Level 5 reached. Level 6 (multi-lane QA) is next if you plan to go to Level 7; Levels 7 and up need an engineer.')
  lines.push('When you prove a step, tick it in docs/PASSPORT.md (machine checks tick themselves).')
  console.log(lines.join('\n'))
}
