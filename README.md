# 1s Tech – Clone (Next.js + TypeScript)

هيكل مبدئي بـ Next.js (App Router) + TypeScript فيه الهيدر والراوتنج بتاع الموقع.

## التشغيل

```bash
npm install
npm run dev
```

بعدها افتح http://localhost:3000

## الصفحات
- `/` — الرئيسية
- `/about` — من نحن
- `/services` — الخدمات
- `/use-cases` — حالات الاستخدام
- `/contact` — تواصل معنا
- `/careers` — التوظيف
- زر "الملف التعريفي" بيفتح ملف الـ PDF مباشرة في تاب جديد (رابط خارجي، مش صفحة داخل الموقع)

## الهيكل
```
app/
  layout.tsx       ← اللاي آوت الرئيسي (RTL + Header/Footer)
  globals.css      ← الستايل العام
  page.tsx         ← الصفحة الرئيسية
  about/page.tsx
  services/page.tsx
  use-cases/page.tsx
  contact/page.tsx
  careers/page.tsx
components/
  Header.tsx       ← الهيدر والنافيجيشن (بيستخدم Link من next/navigation عشان الـ active state)
  Footer.tsx
lib/
  nav-links.ts     ← مكان واحد تتحكم منه في روابط الهيدر كلها (مع الـ types)
tsconfig.json      ← إعدادات TypeScript
```

## ملاحظات
- كل صفحة دلوقتي "placeholder" بعنوانها بس — عشان تكمل عليها لما تجهز المحتوى.
- عدّل الألوان/الفونت من `app/globals.css`.
- عايز تضيف صفحة جديدة؟ اعمل فولدر جديد جوه `app/` فيه `page.tsx`، وضيف الرابط في `lib/nav-links.ts`.
- المشروع كامل TypeScript (.ts / .tsx) — مفيش أي ملف .js في الكود بتاعك.
