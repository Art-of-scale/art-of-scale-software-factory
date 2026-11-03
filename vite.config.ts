import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// The Coach tick turns green once the first Coach session has created docs/PROGRESS.md.
const coachReady = existsSync('docs/PROGRESS.md')

export default defineConfig({
  plugins: [react()],
  // Accept both naming styles: our own VITE_* vars and the NEXT_PUBLIC_* vars that the Vercel–Supabase integration may add.
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  define: { __COACH_READY__: JSON.stringify(coachReady) },
})
