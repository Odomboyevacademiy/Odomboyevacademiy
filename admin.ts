// MAXFIY kalit (service role). "server-only" brauzerga tushib qolishidan himoya qiladi.
// Faqat serverdagi kodda ishlating. RLS'ni chetlab o'tadi!
import 'server-only'
import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  )
}
