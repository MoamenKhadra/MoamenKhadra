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
  education: EducationEntry[];
  leadership: LeadershipEntry[];
  languages: LanguageEntry[];
}

const en: ResumeData = {
  summary:
    'Software engineer experienced in building scalable APIs and data-driven dashboards, with a strong focus on performance, clean architecture, and system design principles. Seeking full-time or part-time opportunities to contribute to production-ready web applications.',
  skills: [
    {
      label: 'Programming languages',
      items: [
        'Python',
        'C',
        'C#',
        'HTML/CSS',
        'JavaScript',
        'Node.js',
        'TypeScript',
        'SQL',
      ],
    },
    {
      label: 'Frameworks',
      items: ['ASP.NET', '.NET Core', 'Angular', 'Flask', 'Express.js'],
    },
    {
      label: 'Tools & technologies',
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
        'Puppet',
        'Figma',
      ],
    },
  ],
  experience: [
    {
      org: 'DEPI — Digital Egyptian Pioneers Initiative',
      orgUrl: 'https://depi.gov.eg/',
      role: 'Full-Stack .NET Development Internship',
      period: 'Nov 2025 — Jul 2026',
      location: 'Remote',
      bullets: [
        'Completed an intensive internship focused on building full-stack web applications using C#, .NET Web API, Blazor, WebAssembly, SQL Server, HTML, CSS, and Bootstrap.',
        'Designed and implemented RESTful APIs and a Blazor-based frontend following SDLC best practices and clean code principles (SOLID, DRY, KISS).',
        'Applied layered architecture, design patterns, and data structures to build maintainable and scalable features.',
        'Implemented a Student Affairs Management System with authentication-ready architecture, relational database design, and transactional data handling.',
        'Applied database concepts including ACID properties, with exposure to CAP and BASE tradeoffs in distributed systems.',
      ],
    },
    {
      org: 'iNNOTECH',
      orgUrl: 'https://www.innotech.eg.com/',
      role: 'Full-Stack .NET Engineering Intern',
      period: 'Jul 2024 — Oct 2024',
      location: 'Remote',
      bullets: [
        'Built full-stack web applications using C#, .NET Web API, Blazor, WebAssembly, SQL Server, HTML, CSS, and Bootstrap.',
        'Designed RESTful APIs and a Blazor frontend following SDLC best practices and clean code principles (SOLID, DRY, KISS).',
        'Applied layered architecture and design patterns to deliver maintainable, scalable features.',
        'Implemented a Student Affairs Management System with relational database design and transactional data handling.',
      ],
    },
    {
      org: 'ALX Africa — Software Engineering Program',
      orgUrl: 'https://www.alxafrica.com/',
      role: 'Software Engineering Trainee',
      period: 'Apr 2023 — Apr 2024',
      location: 'Remote',
      bullets: [
        'Completed a rigorous 12-month, full-time, project-based program emphasizing low-level programming, system design, and full-stack development.',
        'Built and deployed full-stack applications using Python, JavaScript, C, Flask, Express.js, and RESTful APIs with MySQL, MongoDB, and Redis.',
        'Developed system-level solutions using Linux, shell scripting, and Docker, and applied DevOps concepts including NGINX deployment.',
        'Implemented real-world projects including an Airbnb Clone and a File Management API.',
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
    'مهندس برمجيات ذو خبرة في بناء واجهات برمجية قابلة للتوسّع ولوحات معلومات تعتمد على البيانات، مع تركيز قوي على الأداء ونظارة البنية ومبادئ تصميم الأنظمة. أبحث عن فرص عمل بدوام كامل أو جزئي للمساهمة في تطبيقات ويب جاهزة للإنتاج.',
  skills: [
    {
      label: 'لغات البرمجة',
      items: ['Python', 'C', 'C#', 'HTML/CSS', 'JavaScript', 'Node.js', 'TypeScript', 'SQL'],
    },
    {
      label: 'أُطر العمل',
      items: ['ASP.NET', '.NET Core', 'Angular', 'Flask', 'Express.js'],
    },
    {
      label: 'الأدوات والتقنيات',
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
        'Puppet',
        'Figma',
      ],
    },
  ],
  experience: [
    {
      org: 'DEPI — مبادرة الرواد المصريين الرقميين',
      orgUrl: 'https://depi.gov.eg/',
      role: 'تدريب عملي في تطوير واجهات .NET متكاملة',
      period: 'نوفمبر 2025 — يوليو 2026',
      location: 'عن بُعد',
      bullets: [
        'أكملت تدريبًا مكثفًا على بناء تطبيقات ويب متكاملة باستخدام C# و.NET Web API وBlazor وWebAssembly وSQL Server وHTML وCSS وBootstrap.',
        'صمّمت ونفّذت واجهات RESTful وواجهة أمامية قائمة على Blazor وفق أفضل ممارسات دورة تطوير البرمجيات ومبادئ الكود النظيف (SOLID وDRY وKISS).',
        'طبّقت بنية الطبقات وأنماط التصميم وهياكل البيانات لبناء ميزات قابلة للصيانة والتوسّع.',
        'نفّذت نظامًا لإدارة شؤون الطلاب ببنية جاهزة للمصادقة وتصميم قاعدة بيانات علائقية ومعالجة معاملاتية.',
        'طبّقت مفاهيم قواعد البيانات بما فيها خصائص ACID، مع تعرّف على المقايضات في CAP وBASE داخل الأنظمة الموزّعة.',
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
        'صمّمت واجهات RESTful وواجهة Blazor وفق أفضل ممارسات SDLC ومبادئ الكود النظيف (SOLID وDRY وKISS).',
        'طبّقت بنية الطبقات وأنماط التصميم لتسليم ميزات قابلة للصيانة والقابلية للتوسّع.',
        'نفّذت نظامًا لإدارة شؤون الطلاب بتصميم قاعدة بيانات علائقية ومعالجة معاملاتية.',
      ],
    },
    {
      org: 'ALX Africa — برنامج هندسة البرمجيات',
      orgUrl: 'https://www.alxafrica.com/',
      role: 'متدرّب هندسة برمجيات',
      period: 'أبريل 2023 — أبريل 2024',
      location: 'عن بُعد',
      bullets: [
        'أكملت برنامجًا مكثفًا لمدة 12 شهرًا بدوام كامل يعتمد على المشاريع، يركز على البرمجة منخفضة المستوى وتصميم الأنظمة والتطوير المتكامل.',
        'بنيت ونشرت تطبيقات متكاملة باستخدام Python وJavaScript وC وFlask وExpress.js وواجهات RESTful مع MySQL وMongoDB وRedis.',
        'طوّرت حلولًا على مستوى النظام باستخدام Linux وبرمجة سطر الأوامر وDocker، وطبّقت مفاهيم DevOps منها نشر NGINX.',
        'نفّذت مشاريع واقعية منها نسخة من Airbnb وواجهة برمجية لإدارة الملفات.',
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
