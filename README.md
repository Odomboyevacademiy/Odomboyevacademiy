# JAHLDOR 2.0 — 2-bosqich (YOZILGAN, SINALMAGAN)

## Ishga tushirish
1. supabase.com da bepul loyiha oching.
2. SQL Editor: `supabase/migrations/001_jadvallar.sql`, so'ng `002_rls.sql` ni ishga tushiring.
3. `.env.example` ni `.env.local` ga nusxalab, kalitlarni qo'ying (Supabase -> Project Settings -> API).
4. Kompyuteringizda (Node 20+): `npm install` va `npm run dev`, so'ng http://localhost:3000.
5. Ro'yxatdan o'ting. Admin bo'lish: `node --env-file=.env.local scripts/admin-qoshish.mjs pochtangiz@misol.uz`

## Qo'lda tekshirish (hali hech biri bajarilmagan)
- [ ] Ro'yxatdan o'tish va kirish ishlaydi
- [ ] Kirmagan odam /kabinet ni ocholmaydi
- [ ] 2 ta hisob oching: biri ikkinchisining profil/xotira/chat qatorlarini ko'ra olmaydi
- [ ] Oddiy foydalanuvchi `admins` jadvaliga yoza olmaydi (brauzer konsolida urinib ko'ring: xato bo'lishi kerak)
- [ ] Telefonda ko'rinish
