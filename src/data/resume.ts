/**
 * Resume content, structured for the /resume page.
 *
 * Mirrors `resume.md` (the source resume) but split per locale so the
 * page can render timelines and grouped skill chips without markdown.
 * Keep both locale trees in sync when editing.
 */

import type { Locale } from '../config';

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  org: string;
  orgUrl?: string;
  role: string;
  /** Period as displayed (e.g. "Nov 2025 — Jul 2026"). */
  period: string;
  location: string;
  bullets: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework?: string[];
}

export interface LeadershipEntry {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface ResumeData {
  summary: string;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  /** Internships, training programs, and similar non-job entries. */
  training: ExperienceEntry[];
  education: EducationEntry[];
  leadership: LeadershipEntry[];
  languages: LanguageEntry[];
}

const en: ResumeData = {
  summary:
    'Freelance product engineer who builds business websites and tailored web applications from discovery through deployment. Combines product thinking with full-stack engineering across modern frontend frameworks, secure APIs, databases, SSR, and cloud-ready delivery. Available for freelance engagements and software engineering opportunities.',
  skills: [
    {
      label: 'Languages & platforms',
      items: [
        'Python',
        'C',
        'C#',
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'SQL',
      ],
    },
    {
      label: 'Frontend & application development',
      items: [
        'Angular',
        'Vite',
        'Tailwind CSS',
        'daisyUI',
        'ASP.NET Core',
        '.NET Web API',
        'Blazor',
        'Flask',
        'Express.js',
      ],
    },
    {
      label: 'Data, delivery & product quality',
      items: [
        'Linux',
        'Docker',
        'Git',
        'GitHub',
        'MySQL',
        'PostgreSQL',
        'Microsoft SQL Server',
        'MongoDB',
        'Redis',
        'NGINX',
        'Supabase',
        'SSR',
        'REST APIs',
        'SEO',
        'Internationalization & RTL',
        'Figma',
      ],
    },
  ],
  experience: [
    {
      org: 'Independent Client Work',
      role: 'Freelance Software Engineer',
      period: '2025 — Present',
      location: 'Remote · Egypt & GCC',
      bullets: [
        'Deliver conversion-focused websites for businesses in Bahrain, Iraq, Saudi Arabia, and the UAE, translating complex services into clear digital experiences.',
        'Built production-ready applications with Angular SSR, TypeScript, and Supabase, including role-based operations tooling for shipments, drivers, cash-on-delivery collection, and merchant self-service.',
        'Own delivery end to end: responsive UI, secure contact flows, REST APIs, SEO metadata, RTL localization, deployment, and maintainable handover documentation.',
      ],
    },
  ],
  training: [
    {
      org: 'DEPI — Digital Egyptian Pioneers Initiative',
      orgUrl: 'https://depi.gov.eg/',
      role: 'Full-Stack .NET Development Internship',
      period: 'Nov 2025 — Jul 2026',
      location: 'Remote',
      bullets: [
        'Completed an intensive full-stack .NET internship using C#, .NET Web API, Blazor, WebAssembly, SQL Server, HTML, CSS, and Bootstrap.',
        'Designed RESTful APIs and Blazor interfaces using SDLC practices and clean-code principles including SOLID, DRY, and KISS.',
        'Applied layered architecture, design patterns, and data structures to build maintainable, scalable features.',
        'Built a Student Affairs Management System with authentication-ready architecture, relational data modeling, and transactional handling.',
      ],
    },
    {
      org: 'iNNOTECH',
      orgUrl: 'https://www.innotech.eg.com/',
      role: 'Full-Stack .NET Engineering Intern',
      period: 'Jul 2024 — Oct 2024',
      location: 'Remote',
      bullets: [
        'Built full-stack web applications with C#, .NET Web API, Blazor, WebAssembly, SQL Server, HTML, CSS, and Bootstrap.',
        'Designed RESTful APIs and Blazor interfaces using SDLC practices and clean-code principles.',
        'Used layered architecture and design patterns to deliver maintainable, scalable features.',
        'Implemented a Student Affairs Management System with relational data modeling and transactional handling.',
      ],
    },
    {
      org: 'ALX Africa — Software Engineering Program',
      orgUrl: 'https://www.alxafrica.com/',
      role: 'Software Engineering Trainee',
      period: 'Apr 2023 — Apr 2024',
      location: 'Remote',
      bullets: [
        'Completed a rigorous 12-month, full-time, project-based program in low-level programming, system design, and full-stack development.',
        'Built and deployed applications with Python, JavaScript, C, Flask, Express.js, REST APIs, MySQL, MongoDB, and Redis.',
        'Applied Linux, shell scripting, Docker, and NGINX deployment practices to system-level and full-stack projects.',
        'Delivered portfolio projects including an Airbnb clone and a file-management API.',
      ],
    },
  ],
  education: [
    {
      institution: 'Alexandria University',
      degree:
        'Bachelor of Engineering in Electronics and Communications Engineering',
      period: 'Sep 2021 — Jul 2026',
      location: 'Alexandria, Egypt',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Design Principles',
        'Software Engineering',
        'Operating Systems',
        'Computer Networks',
        'Digital Communications',
        'Digital Signal Processing (DSP)',
      ],
    },
  ],
  leadership: [
    {
      org: 'EED Society — Alexandria University',
      role: 'Academic Committee Member',
      period: 'Spring 2022 — Present',
      location: 'Alexandria, Egypt',
      bullets: [
        'Created explanation videos and wrote summaries of subjects related to my major.',
        'Served as Project Manager for WBE (Watts Beyond Electricity), one of the team’s major events.',
        'Hosted events multiple times and mentored new members with training sessions on presentation, time management, and research skills.',
      ],
    },
  ],
  languages: [
    { name: 'Arabic', level: 'Native proficiency' },
    { name: 'English', level: 'Advanced professional proficiency' },
    { name: 'German', level: 'Elementary proficiency' },
  ],
};

const ar: ResumeData = {
  summary:
    'مهندس منتجات برمجية مستقل يبني مواقع أعمال وتطبيقات ويب مخصّصة من مرحلة الاستكشاف حتى النشر. أجمع بين عقلية المنتج والهندسة المتكاملة عبر أطر الواجهات الحديثة والواجهات البرمجية الآمنة وقواعد البيانات والرسم على الخادم والتسليم الجاهز للإنتاج. متاح لمشاريع العمل الحر وفرص هندسة البرمجيات.',
  skills: [
    {
      label: 'اللغات والمنصات',
      items: ['Python', 'C', 'C#', 'HTML/CSS', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      label: 'تطوير الواجهات والتطبيقات',
      items: ['Angular', 'Vite', 'Tailwind CSS', 'daisyUI', 'ASP.NET Core', '.NET Web API', 'Blazor', 'Flask', 'Express.js'],
    },
    {
      label: 'البيانات والتسليم وجودة المنتج',
      items: [
        'Linux',
        'Docker',
        'Git',
        'GitHub',
        'MySQL',
        'PostgreSQL',
        'Microsoft SQL Server',
        'MongoDB',
        'Redis',
        'NGINX',
        'Supabase',
        'SSR',
        'REST APIs',
        'SEO',
        'التدويل ودعم RTL',
        'Figma',
      ],
    },
  ],
  experience: [
    {
      org: 'مشاريع عملاء مستقلة',
      role: 'مهندس برمجيات مستقل',
      period: '2025 — حتى الآن',
      location: 'عن بُعد · مصر والخليج',
      bullets: [
        'أقدّم مواقع أعمال تركّز على التحويل لشركات في البحرين والعراق والسعودية والإمارات، وأحوّل الخدمات المعقدة إلى تجارب رقمية واضحة.',
        'بنيت تطبيقات جاهزة للإنتاج باستخدام Angular SSR وTypeScript وSupabase، منها أدوات تشغيل تعتمد على الصلاحيات لإدارة الشحنات والسائقين والتحصيل النقدي وخدمة التجار الذاتية.',
        'أتولى التسليم من البداية إلى النهاية: واجهات متجاوبة، ومسارات تواصل آمنة، وواجهات REST، وتحسين الظهور في محركات البحث، والتعريب ودعم RTL، والنشر، وتوثيق التسليم القابل للصيانة.',
      ],
    },
  ],
  training: [
    {
      org: 'DEPI — مبادرة الرواد المصريين الرقميين',
      orgUrl: 'https://depi.gov.eg/',
      role: 'تدريب عملي في تطوير واجهات .NET متكاملة',
      period: 'نوفمبر 2025 — يوليو 2026',
      location: 'عن بُعد',
      bullets: [
        'أكملت تدريبًا مكثفًا في تطوير .NET المتكامل باستخدام C# و.NET Web API وBlazor وWebAssembly وSQL Server وHTML وCSS وBootstrap.',
        'صمّمت واجهات REST وواجهات Blazor وفق ممارسات دورة تطوير البرمجيات ومبادئ الكود النظيف، ومنها SOLID وDRY وKISS.',
        'طبّقت بنية الطبقات وأنماط التصميم وهياكل البيانات لبناء ميزات قابلة للصيانة والتوسّع.',
        'بنيت نظام إدارة شؤون الطلاب ببنية جاهزة للمصادقة ونمذجة بيانات علائقية ومعالجة معاملاتية.',
      ],
    },
    {
      org: 'iNNOTECH',
      orgUrl: 'https://www.innotech.eg.com/',
      role: 'مهندس تطوير واجهات .NET متكاملة (تدريب)',
      period: 'يوليو 2024 — أكتوبر 2024',
      location: 'عن بُعد',
      bullets: [
        'بنيت تطبيقات ويب متكاملة باستخدام C# و.NET Web API وBlazor وWebAssembly وSQL Server وHTML وCSS وBootstrap.',
        'صمّمت واجهات REST وواجهات Blazor وفق ممارسات SDLC ومبادئ الكود النظيف.',
        'طبّقت بنية الطبقات وأنماط التصميم لتسليم ميزات قابلة للصيانة والتوسّع.',
        'نفّذت نظام إدارة شؤون الطلاب بنمذجة بيانات علائقية ومعالجة معاملاتية.',
      ],
    },
    {
      org: 'ALX Africa — برنامج هندسة البرمجيات',
      orgUrl: 'https://www.alxafrica.com/',
      role: 'متدرّب هندسة برمجيات',
      period: 'أبريل 2023 — أبريل 2024',
      location: 'عن بُعد',
      bullets: [
        'أكملت برنامجًا مكثفًا لمدة 12 شهرًا بدوام كامل يعتمد على المشاريع في البرمجة منخفضة المستوى وتصميم الأنظمة والتطوير المتكامل.',
        'بنيت ونشرت تطبيقات باستخدام Python وJavaScript وC وFlask وExpress.js وواجهات REST مع MySQL وMongoDB وRedis.',
        'طبّقت Linux وبرمجة سطر الأوامر وDocker ونشر NGINX في مشاريع على مستوى النظام والتطوير المتكامل.',
        'قدّمت مشاريع في المعرض منها نسخة من Airbnb وواجهة برمجية لإدارة الملفات.',
      ],
    },
  ],
  education: [
    {
      institution: 'جامعة الإسكندرية',
      degree: 'بكالوريوس هندسة في الهندسة والإتصالات والإلكترونيات',
      period: 'سبتمبر 2021 — يوليو 2026',
      location: 'الإسكندرية، مصر',
      coursework: [
        'هياكل البيانات والخوارزميات',
        'مبادئ تصميم البرمجيات الكائنية',
        'هندسة البرمجيات',
        'أنظمة التشغيل',
        'شبكات الحاسوب',
        'الاتصالات الرقمية',
        'معالجة الإشارة الرقمية (DSP)',
      ],
    },
  ],
  leadership: [
    {
      org: 'مجتمع EED — جامعة الإسكندرية',
      role: 'عضو اللجنة الأكاديمية',
      period: 'ربيع 2022 — حتى الآن',
      location: 'الإسكندرية، مصر',
      bullets: [
        'أنتجت فيديوهات شرح وكتبت ملخّصات لمواد مرتبطة بتخصصي.',
        'تولّيت إدارة مشروع WBE (Watts Beyond Electricity) أحد أهم فعاليات الفريق.',
        'أديت دور معدّ الفعاليات عدة مرات ووجّهت أعضاء جدد عبر جلسات تدريبية في مهارات العرض وإدارة الوقت والبحث.',
      ],
    },
  ],
  languages: [
    { name: 'العربية', level: 'اللغة الأم' },
    { name: 'الإنجليزية', level: 'إتقان مهني متقدّم' },
    { name: 'الألمانية', level: 'إتقان مبتدئ' },
  ],
};

export const RESUME: Record<Locale, ResumeData> = { en, ar };
