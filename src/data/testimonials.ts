/**
 * Client testimonials shown in the home page "What clients say" section.
 *
 * ⚠️ PLACEHOLDERS — replace every entry with a real client quote before
 * publishing (quote, name, role/company, initials for the avatar). Keep the
 * `en` and `ar` trees in sync. Emptying a locale's array hides the section
 * on pages rendered for that locale.
 */

import type { Locale } from '../config';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: Record<Locale, readonly Testimonial[]> = {
  en: [
    {
      quote:
        'Placeholder quote — replace this with a real testimonial about a project we worked on together.',
      name: 'Client name',
      role: 'Role / company — placeholder',
      initials: 'CN',
    },
    {
      quote:
        'Placeholder quote — replace this with a real testimonial about a project we worked on together.',
      name: 'Client name',
      role: 'Role / company — placeholder',
      initials: 'CN',
    },
    {
      quote:
        'Placeholder quote — replace this with a real testimonial about a project we worked on together.',
      name: 'Client name',
      role: 'Role / company — placeholder',
      initials: 'CN',
    },
  ],
  ar: [
    {
      quote:
        'نص مؤقت — استبدله بتقييم حقيقي عن مشروع عملنا عليه معًا.',
      name: 'اسم العميل',
      role: 'الدور / الشركة — مؤقت',
      initials: 'ع',
    },
    {
      quote:
        'نص مؤقت — استبدله بتقييم حقيقي عن مشروع عملنا عليه معًا.',
      name: 'اسم العميل',
      role: 'الدور / الشركة — مؤقت',
      initials: 'ع',
    },
    {
      quote:
        'نص مؤقت — استبدله بتقييم حقيقي عن مشروع عملنا عليه معًا.',
      name: 'اسم العميل',
      role: 'الدور / الشركة — مؤقت',
      initials: 'ع',
    },
  ],
};
