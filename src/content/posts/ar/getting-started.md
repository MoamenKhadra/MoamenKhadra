---
title: 'البدء'
description: 'مقالك الأول مع Chirping Astro. تعلّم كيفية إعداد موقعك وكتابة المقالات ونشره.'
pubDate: 2026-05-03
tags: [getting-started, tutorial]
categories: [Guide]
translationKey: getting-started
pinned: false
toc: true
draft: true
---

أهلًا بك في مدونتك الجديدة! يأخذك هذا المقال التجريبي عبر أساسيات استخدام **Chirping Astro**.

## إعداد موقعك

افتح `src/config.ts` وعدّل:

- **title** — اسم موقعك/مدونتك
- **description** — يظهر في محركات البحث وخلاصة RSS
- **author.name** — يظهر في الشريط الجانبي والتذييل
- **url** — رابط موقعك الإنتاجي (عبر متغير `SITE_URL` عند النشر)

## متغيرات البيئة

انسخ `.env.example` إلى `.env`:

```bash
cp .env.example .env
```

أهم المتغيرات:

| المتغير                | الدور                                                           |
| ---------------------- | --------------------------------------------------------------- |
| `SITE_URL`             | رابط موقعك الإنتاجي (مثال `https://myblog.com`)                 |
| `BASE_PATH`            | `/<اسم-المستودع>` لـ GitHub Pages، واتركه فارغًا إن لم يكن كذلك |
| `PUBLIC_GITHUB_HANDLE` | يعرض أيقونة GitHub في الشريط الجانبي                            |
| `PUBLIC_GISCUS_*`      | يفعّل تعليقات Giscus ([الدليل](https://giscus.app))             |

## كتابة المقالات

أنشئ ملفات Markdown داخل `src/content/posts/ar/`:

```markdown
---
title: 'مقالي الأول'
description: 'وصف قصير لمحركات البحث وقوائم المقالات.'
pubDate: 2026-05-03
tags: [tag1, tag2]
categories: [فئة]
translationKey: my-post
---

اكتب محتواك هنا باستخدام Markdown القياسي.
```

### حقول البيانات الأمامية المتاحة

| الحقل            | مطلوب | الوصف                                    |
| ---------------- | ----- | ---------------------------------------- |
| `title`          | نعم   | عنوان المقال (1–140 حرفًا)               |
| `description`    | نعم   | وصف الميتا (1–280 حرفًا)                 |
| `pubDate`        | نعم   | تاريخ النشر (صيغة ISO)                   |
| `tags`           | لا    | مصفوفة الوسوم                            |
| `categories`     | لا    | مصفوفة التصنيفات                         |
| `heroImage`      | لا    | المسار إلى صورة الواجهة                  |
| `pinned`         | لا    | تثبيت المقال في أعلى القوائم             |
| `toc`            | لا    | عرض جدول المحتويات                       |
| `draft`          | لا    | إخفاء المقال في بيئة الإنتاج             |
| `translationKey` | لا    | مفتاح مشترك مع النسخة العربية/الإنجليزية |

## التعريب

تُربط المقالات بين اللغات عبر حقل `translationKey`. أنشئ ملفًا في `src/content/posts/en/` وآخر في `src/content/posts/ar/` بنفس المفتاح لتفعيل مبدّل اللغة.

## النشر

ارفع التغييرات إلى الفرع `main` على GitHub. سيبني workflow المرفق الموقع وينشره على GitHub Pages تلقائيًا.

لربط نطاق خاص، اضبط `SITE_URL` في متغيرات مستودعك عبر **Settings → Environments → github-pages**.

## معرفة المزيد

- [التوثيق الكامل](https://github.com/kannansuresh/chirping-astro)
- [عرض حي](https://kannansuresh.github.io/chirping-astro)
- [توثيق Astro](https://docs.astro.build)

---

متعة كبيرة بمدونتك! احذف هذا المقال عندما تصبح جاهزًا لنشر محتواك الخاص.
