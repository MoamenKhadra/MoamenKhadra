/**
 * Client testimonials shown in the home page "What clients say" section.
 *
 * Client-approved testimonials. Keep the English translations faithful to the
 * Arabic originals and keep both locale trees in sync.
 */

import type { Locale } from '../config';

import azizImg from '../assets/images/testimonials/aziz.jpg';
import dawoudImg from '../assets/images/testimonials/dawoud.jpg';
import kathemImg from '../assets/images/testimonials/kathem.jpg';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatar: string;
}

export const TESTIMONIALS: Record<Locale, readonly Testimonial[]> = {
  en: [
    {
      quote:
        'An excellent experience and a collaboration worthy of appreciation. I thank Moamen for his outstanding work designing and developing the Aquamatrix website and turning our vision into a professional design that reflects our company identity and water-solutions services. I appreciate his attention to detail, commitment to delivering polished work, and reliability in meeting deadlines. We are very pleased with this collaboration.',
      name: 'Dr. Islam A. Dawoud',
      role: 'CEO, Aquamatrix',
      initials: 'ID',
      avatar: dawoudImg.src,
    },
    {
      quote:
        'I recommend working with Moamen. He is cooperative, responsive, patient, and clearly understands his field.',
      name: 'Pharm. Mustafa Aziz',
      role: 'CEO, Nisan Scientific Bureau',
      initials: 'MA',
      avatar: azizImg.src,
    },
    {
      quote:
        'Honestly, your work is organized and excellent. May you be rewarded and blessed with continued success.',
      name: 'Mustafa Al-Kathem',
      role: 'Founder, Makhzun',
      initials: 'MK',
      avatar: kathemImg.src,
    },
  ],
  ar: [
    {
      quote:
        'تجربة ممتازة وتعاون يستحق التقدير! أشكر مؤمن على جهوده المميزة في تصميم وتطوير الكود الخاص بموقع أكواماتريكس (AQUAMATRIX)، وتحويل رؤيتنا إلى تصميم احترافي يعكس هوية الشركة وطبيعة خدماتها في مجال حلول المياه. أقدّر اهتمامه بالتفاصيل وحرصه على تقديم عمل مميز يجمع بين المظهر الأنيق والتنظيم الواضح، وحرصه على التسليم في المواعيد المحددة. سعداء بهذا التعاون، وله منا جزيل الشكر والتقدير.',
      name: 'د. إسلام أ. داود',
      role: 'الرئيس التنفيذي، أكواماتريكس',
      initials: 'إد',
      avatar: dawoudImg.src,
    },
    {
      quote: 'أنصح بالتعامل مع الأخ مؤمن؛ متعاون ومتجاوب وصبور وفاهم في اختصاصه.',
      name: 'د. مصطفى عزيز',
      role: 'الرئيس التنفيذي، نيسان للمكتب العلمي',
      initials: 'مع',
      avatar: azizImg.src,
    },
    {
      quote: 'والله أنت بصراحة شغلك مرتب وبيض الله وجهك في الدنيا والآخرة، ربي يبارك لك ويوفقك.',
      name: 'مصطفى الكاظم',
      role: 'المؤسس، مخزون',
      initials: 'مك',
      avatar: kathemImg.src,
    },
  ],
};
