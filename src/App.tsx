import { useEffect, useState } from 'react'
import { supabase, supabaseConfigured, supabaseVarSource } from './lib/supabase'

// Art of Scale AI Leverage X-Ray link (V1.5; live from V1.9). While empty, the board shows 'Link coming soon'.
const XRAY_URL = 'https://xray.artofscale.io/ai-leverage-xray/'
const SPRINT_URL = 'https://artofscale.io/coding-sprint/'

type State = 'ok' | 'wait' | 'fail'
interface Check { label: string; detail: string; state: State }

async function checkDatabase(): Promise<Check> {
  if (!supabase) {
    return { label: 'Database', state: 'fail', detail: 'Not connected yet. Your Coach will guide you (Supabase URL and public key in Vercel).' }
  }
  // A probe on a table that does not exist: a "table not found" answer proves the database is reachable.
  const { error } = await supabase.from('factory_probe').select('*').limit(1)
  if (!error || ['PGRST205', '42P01', 'PGRST116'].includes(error.code ?? '')) {
    return { label: 'Database', state: 'ok', detail: `Supabase is connected (settings: ${supabaseVarSource}).` }
  }
  console.error('Database check failed:', error)
  return { label: 'Database', state: 'fail', detail: `Supabase did not answer: ${error.message}` }
}

const EDITION = { free: 'Free · FAW Lab Kit', sprint: 'SHIFTAI Coding Sprint' } as const

function Passport({ p }: { p: Passport }) {
  return (
    <section className="passport" aria-label="Factory Passport">
      <p className="kicker">FACTORY PASSPORT</p>
      <h2>{p.working && p.reached < 3 ? `Your factory: Level 3 in progress (today: Level ${p.reached})` : `Your factory: Level ${p.reached} · ${p.reachedName}`}</h2>
      {p.working ? (
        <>
          <p className="next-h">To reach Level {p.working.n} ({p.working.name}):</p>
          <ol className="next">{p.next.map((s) => <li key={s}>{s}</li>)}</ol>
        </>
      ) : <p className="next-h">Level 5 reached. Level 6 (multi-lane QA) comes before Level 7; Levels 7 and up need an engineer.</p>}
      <div className="levels">
        {p.levels.map((l) => (
          <details key={l.n} className={`lvl ${l.edition}`} open={p.working?.n === l.n}>
            <summary>
              <span><b>L{l.n} {l.name}</b> <span className="ed">{EDITION[l.edition]}</span></span>
              <span className="bar" aria-label={`${l.done} of ${l.total} done`}><i style={{ width: `${(100 * l.done) / l.total}%` }} /></span>
              <span className="cnt">{l.done}/{l.total}</span>
            </summary>
            <ul>
              {l.items.map((i) => (
                <li key={i.id} className={i.done ? 'ok' : ''}>
                  <span aria-hidden>{i.done ? '✓' : '○'}</span> {i.label} <small>· {i.by === 'machine' ? 'checked by the factory' : 'ticked by your Coach'}</small>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
      <p className="foot">The Passport updates on every deploy. Machine checks tick themselves; your Coach ticks the rest in <code>docs/PASSPORT.md</code> once it has seen the proof.</p>
    </section>
  )
}

export default function App() {
  const host = window.location.hostname
  const live = host !== 'localhost' && host !== '127.0.0.1'
  const [db, setDb] = useState<Check>({ label: 'Database', state: 'wait', detail: 'Checking…' })

  useEffect(() => {
    checkDatabase().then(setDb).catch((err: unknown) => {
      console.error('Database check crashed:', err)
      setDb({ label: 'Database', state: 'fail', detail: 'The check could not run. Ask your Coach: "the database tick is red".' })
    })
  }, [])

  const checks: Check[] = [
    { label: 'Code', state: 'ok', detail: 'Your repo is in your own GitHub.' },
    { label: 'Hosting', state: live ? 'ok' : 'wait', detail: live ? `Live at ${host}` : 'Running on this computer only.' },
    supabaseConfigured ? db : { label: 'Database', state: 'fail', detail: 'Not connected yet. Your Coach will guide you (Supabase URL and public key in Vercel).' },
    { label: 'Coach', state: __COACH_READY__ ? 'ok' : 'wait', detail: __COACH_READY__ ? 'The Art of Scale Coding Coach is installed and has started your factory.' : 'Open Claude Code on this repo and paste your launch prompt.' },
  ]
  const allOk = checks.every((c) => c.state === 'ok')

  return (
    <main className="wrap">
      <p className="kicker">ART OF SCALE SOFTWARE FACTORY</p>
      <h1>{allOk ? 'Factory ready. Your first repo is live, and your software factory is live.' : 'Your software factory: setting up'}</h1>
      <ul className="board">
        {checks.map((c) => (
          <li key={c.label} className={c.state}>
            <span className="tick" aria-hidden>{c.state === 'ok' ? '✓' : c.state === 'wait' ? '…' : '✗'}</span>
            <span><b>{c.label}</b><br /><small>{c.detail}</small></span>
          </li>
        ))}
      </ul>
      <Passport p={__PASSPORT__} />
      {__COACH_READY__ ? (
        <p className="foot">Next: open a new session on this repo in Claude Code and say <code>continue my build</code> (or <code>what now after the lab</code>).</p>
      ) : (
        <p className="foot">Next: open Claude Code on this repo and paste: <code>Start my software factory. Read CLAUDE.md, install the factory if it is not installed yet, then run the sf-start skill and guide me step by step.</code></p>
      )}
      <p className="foot"><b>Factory ready</b> means the guards and checks work. At Level 3 your app may hold made-up data or your own non-sensitive work data (Class 0: made-up data only · Class P: personal, only you use it · Class N: shared utility, a few colleagues, no sensitive data). It is <b>not production ready</b> until it passes the Art of Scale Production-Ready Gate (Level 5). Art of Scale.</p>
      <aside className="cta">
        <b>What level is your factory?</b> Find your level and your next step with the free Art of Scale AI Leverage X-Ray.{' '}
        {XRAY_URL ? <a href={XRAY_URL} target="_blank" rel="noopener noreferrer">Do your free X-Ray</a> : null}
        {' '}Ready for Level 5? See the <a href={SPRINT_URL} target="_blank" rel="noopener noreferrer">SHIFTAI Coding Sprint</a>.
      </aside>
    </main>
  )
}
