import { useEffect, useState, type FormEvent } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './supabase'

// Level 3 login (V1.8): email and password with Supabase Auth.
// Row level security in the database decides what each logged-in user can see and change.
// This screen only proves who the user is; it is not the protection.

export function useSession(): { session: Session | null; loading: boolean } {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(Boolean(supabase))

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) console.error('Could not read the login session:', error)
      setSession(data.session)
      setLoading(false)
    })
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s))
    return () => data.subscription.unsubscribe()
  }, [])

  return { session, loading }
}

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'in' | 'up'>('in')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (!supabase) { setMessage('The database is not connected yet.'); return }
    setBusy(true)
    setMessage('')
    const { error } = mode === 'in'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password })
    setBusy(false)
    if (error) {
      console.error('Login failed:', error)
      setMessage(error.message)
    } else if (mode === 'up') {
      setMessage('Account created. If you are not signed in yet, ask your Coach to check that "Confirm email" is off in Supabase.')
    }
  }

  return (
    <form className="signin" onSubmit={submit}>
      <h2>{mode === 'in' ? 'Sign in' : 'Create an account'}</h2>
      <label>Email <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
      <label>Password <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === 'in' ? 'current-password' : 'new-password'} /></label>
      <button type="submit" disabled={busy}>{busy ? 'Please wait…' : mode === 'in' ? 'Sign in' : 'Create account'}</button>
      <button type="button" className="link" onClick={() => setMode(mode === 'in' ? 'up' : 'in')}>
        {mode === 'in' ? 'New here? Create an account' : 'Have an account? Sign in'}
      </button>
      {message ? <p role="alert">{message}</p> : null}
    </form>
  )
}

export function SignOutButton() {
  async function signOut() {
    if (!supabase) return
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Sign out failed:', error)
  }
  return <button type="button" className="link" onClick={signOut}>Sign out</button>
}
