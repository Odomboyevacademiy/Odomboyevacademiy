// Brauzer uchun Supabase. Faqat OCHIQ kalit ishlatiladi (RLS himoya qiladi).
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
