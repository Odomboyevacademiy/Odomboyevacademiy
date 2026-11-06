// Kirmaganlarni /kabinet dan qaytaradi, kirganlarni /kirish dan kabinetga yo'naltiradi.
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (list: { name: string; value: string; options: CookieOptions }[]) => {
          list.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request })
          list.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
        },
      },
    }
  )
  const { data: { user } } = await supabase.auth.getUser()
  const path = request.nextUrl.pathname

  if (!user && path.startsWith('/kabinet')) {
    return NextResponse.redirect(new URL('/kirish', request.url))
  }
  if (user && (path === '/kirish' || path === '/royxat')) {
    return NextResponse.redirect(new URL('/kabinet', request.url))
  }
  return response
}

export const config = { matcher: ['/kabinet/:path*', '/kirish', '/royxat'] }
