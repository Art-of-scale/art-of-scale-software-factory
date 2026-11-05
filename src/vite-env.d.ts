/// <reference types="vite/client" />
declare const __COACH_READY__: boolean
interface PassportItem { id: string; label: string; done: boolean; by: 'machine' | 'coach' }
interface PassportLevel { n: number; name: string; edition: 'free' | 'sprint'; items: PassportItem[]; done: number; total: number }
interface Passport { reached: number; reachedName: string; working: { n: number; name: string; edition: 'free' | 'sprint' } | null; next: string[]; levels: PassportLevel[] }
declare const __PASSPORT__: Passport
