import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Only public values: the project URL and the public (anon / publishable) key. Never the secret or service-role key.
const env = import.meta.env
const url: string | undefined = env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL
const key: string | undefined =
  env.VITE_SUPABASE_ANON_KEY ||
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabaseConfigured = Boolean(url && key)
export const supabase: SupabaseClient | null = supabaseConfigured ? createClient(url as string, key as string) : null
export const supabaseVarSource = env.VITE_SUPABASE_URL ? 'VITE_' : env.NEXT_PUBLIC_SUPABASE_URL ? 'NEXT_PUBLIC_' : 'none'
