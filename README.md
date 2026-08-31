# DR HOME — عرض الحملة الإعلانية

موقع عرض حملة سينمائي لخدمة **Dr Home** (طبيب أسنان بيجيلك في البيت).
Arabic‑first · RTL · لغة مصرية للـ human copy.

> **الفكرة:** ماذا لو جاء طبيب الأسنان إليك؟
> **الرسالة:** طبيب أسنانك... عند باب بيتك.

## التشغيل

```bash
npm install
npm run dev      # خادم التطوير على http://localhost:5173
npm run build    # بناء الإنتاج في dist/
npm run preview  # معاينة نسخة الإنتاج
```

## التقنيات

React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis (smooth scroll) · Lucide Icons.

## بنية الموقع (15 فصل)

يُحكى الموقع كقصة بصرية بالترتيب التالي — كل قسم في ملف مستقل داخل `src/sections/`:

1. `Hero` — البداية (مشهد بحث سينمائي → السؤال → البراند)
2. `Problem` — المشكلة
3. `Idea` — الفكرة (بدل ما تتحرك → الدكتور يتحرك)
4. `WhatIsDrHome` — ما هو Dr Home؟
5. `HowItWorks` — كيف تعمل الخدمة؟ (٤ خطوات)
6. `WhoNeeds` — مين محتاج Dr Home؟
7. `HomeExperience` — تجربة البيت (reel أفقي بالـ scroll)
8. `Doctors` — الأطباء
9. `WhyDrHome` — لماذا Dr Home؟ (حوار بين الدكتورين)
10. `ContentPillars` — أعمدة المحتوى (٦ أعمدة)
11. `CampaignIdeas` — أفكار الحملة
12. `MainFilm` — الفيلم الإعلاني الرئيسي (Storyboard)
13. `SocialMedia` — نماذج السوشيال ميديا
14. `CampaignJourney` — رحلة الشهر الأول
15. `Ending` — النهاية + CTA + Footer

مكونات مساعدة في `src/components/` (Navbar, ScrollProgress, motion/Reveal, ui/Kicker)
وإعدادات مشتركة في `src/lib/` (Lenis smooth scroll, قائمة الأقسام).

## ملاحظات للعميل (Placeholders)

المحتوى التالي مكتوب كـ Placeholder واضح ويحتاج بيانات حقيقية من العميل:

- **صور الأطباء** (حاليًا Monogram: ي / ح).
- **تخصص / سنوات خبرة / شهادات** كل طبيب — في قسم الأطباء.
- **بيانات التواصل** في الـ Footer.

لم تُخترع أي أرقام أو مؤهلات — كل بيانات الأطباء الواقعية متروكة كـ Placeholder.
