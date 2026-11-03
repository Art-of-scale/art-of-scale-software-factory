import { useEffect, useState } from 'react'
import { supabase, supabaseConfigured, supabaseVarSource } from './lib/supabase'

// Art of Scale Software Factory X-Ray link (V1.5). While empty, the board shows 'Link coming soon'.
const XRAY_URL = ''

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
      <h1>{allOk ? 'Factory ready. Your first repo is live, and your software factory is live.' : 'Your software factory is loading'}</h1>
      <ul className="board">
        {checks.map((c) => (
          <li key={c.label} className={c.state}>
            <span className="tick" aria-hidden>{c.state === 'ok' ? '✓' : c.state === 'wait' ? '…' : '✗'}</span>
            <span><b>{c.label}</b><br /><small>{c.detail}</small></span>
          </li>
        ))}
      </ul>
      <p className="foot">Next: open Claude Code on this repo and paste: <code>Start my software factory. Read CLAUDE.md, install the factory if it is not installed yet, then run the sf-start skill and guide me step by step.</code></p>
      <p className="foot"><b>Factory ready</b> means the guards and checks work. Your app is a <b>Class 0 app</b>: made-up data only. It is <b>not production ready</b> until it passes the Art of Scale Production-Ready Gate (Level 5). Art of Scale.</p>
      <aside className="cta">
        <b>What level is your factory?</b> Find your level and your next step with the free Art of Scale Software Factory X-Ray.{' '}
        {XRAY_URL ? <a href={XRAY_URL}>Do your free X-Ray</a> : <span>Link coming soon.</span>}
      </aside>
    </main>
  )
}
