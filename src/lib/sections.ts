/** Canonical list of story sections — ids drive nav + anchors. */
export const SECTIONS = [
  { id: 'start', index: '01', title: 'البداية' },
  { id: 'problem', index: '02', title: 'المشكلة' },
  { id: 'idea', index: '03', title: 'الفكرة' },
  { id: 'what', index: '04', title: 'ما هو Dr Home؟' },
  { id: 'how', index: '05', title: 'كيف تعمل الخدمة؟' },
  { id: 'who', index: '06', title: 'مين محتاج Dr Home؟' },
  { id: 'experience', index: '07', title: 'تجربة البيت' },
  { id: 'doctors', index: '08', title: 'الأطباء' },
  { id: 'why', index: '09', title: 'لماذا Dr Home؟' },
  { id: 'pillars', index: '10', title: 'أعمدة المحتوى' },
  { id: 'ideas', index: '11', title: 'أفكار الحملة' },
  { id: 'film', index: '12', title: 'الفيلم الإعلاني' },
  { id: 'social', index: '13', title: 'السوشيال ميديا' },
  { id: 'journey', index: '14', title: 'رحلة الحملة' },
  { id: 'end', index: '15', title: 'النهاية' },
] as const

/** Compact subset shown in the top navigation bar. */
export const NAV_ITEMS = [
  { id: 'problem', title: 'المشكلة' },
  { id: 'idea', title: 'الفكرة' },
  { id: 'how', title: 'الخدمة' },
  { id: 'experience', title: 'التجربة' },
  { id: 'doctors', title: 'الأطباء' },
  { id: 'film', title: 'الفيلم' },
  { id: 'journey', title: 'الحملة' },
] as const
