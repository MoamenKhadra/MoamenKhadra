import process from 'node:process';
import avatarImg from './assets/images/site/moamen_khadra.jpeg';
import ogDefaultImg from './assets/images/site/og-default.svg';
import type { GiscusConfig, NavItem, SiteConfig, SocialLink } from './types/config';

/**
 * Global site + theme configuration.
 * Edit values here to rebrand the theme. All values are typed and consumed
 * across layouts, components, RSS, sitemap, and SEO.
 */

// Export imported site images for use in components
export const SITE_IMAGES = {
  avatar: avatarImg,
  ogDefault: ogDefaultImg,
} as const;

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

/**
 * Author + social handles. Filled in from env vars (see `.env.example`)
 * so identifiers never need to be hard-coded into source.
 *
 * Leave any handle as an empty string to drop it from the sidebar
 * automatically — the entry won't render and no broken `your-handle`
 * URL is exposed.
 */
const GITHUB_HANDLE = import.meta.env.PUBLIC_GITHUB_HANDLE ?? '';
const GITHUB_REPO = import.meta.env.PUBLIC_GITHUB_REPO ?? 'chirping-astro';
const TWITTER_HANDLE = import.meta.env.PUBLIC_TWITTER_HANDLE ?? '';
const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL ?? '';
const THEME_REPO_URL = 'https://github.com/kannansuresh/chirping-astro';

/**
 * Public contact coordinates of the author. Hard-coded (not env-driven) so
 * a build without `.env` still ships working contact links — these are
 * published on the resume and social profiles anyway.
 */
export const CONTACT = {
  /** Preferred contact channel (WhatsApp Business). */
  whatsapp: 'https://wa.me/201069213448',
  email: 'moamen.khadra@outlook.com',
  linkedin: 'https://www.linkedin.com/in/moamen-khadra',
  github: 'https://github.com/MoamenKhadra',
  instagram: 'https://www.instagram.com/moamenkhadra/',
  x: 'https://x.com/moamenkhadra',
  youtube: 'https://youtube.com/@moamen-khadra',
  /** Short location shown on the resume header and home hero. */
  location: 'Alexandria, Egypt',
} as const;

/**
 * Public GitHub coordinates of the deployed source. Useful for custom links
 * and integrations that need a repository URL. When
 * `PUBLIC_GITHUB_HANDLE` is unset, `url` falls back to a safe default so
 * generated links never point at a 404.
 */
export const REPO = {
  handle: GITHUB_HANDLE,
  name: GITHUB_REPO,
  url: GITHUB_HANDLE ? `https://github.com/${GITHUB_HANDLE}/${GITHUB_REPO}` : 'https://github.com',
} as const;

export const SITE: SiteConfig = {
  // ==========================================
  // ✅ SAFE TO EDIT (Content & Presentation)
  // ==========================================

  /** Default site title used as homepage <title> and meta. */
  title: 'Moamen Khadra',
  /** Site tagline / description. */
  description:
    'Portfolio of Moamen Khadra, a software engineer building scalable APIs and data-driven web apps with Python, TypeScript, .NET, and Angular.',
  /** Author/handle shown in footer + meta. */
  author: {
    name: 'Moamen Khadra',
    url: GITHUB_HANDLE ? `https://github.com/${GITHUB_HANDLE}` : CONTACT.github,
    avatar: avatarImg,
    bio: 'Software Engineer',
  },
  /** Default OG image. */
  defaultOgImage: ogDefaultImg.src,
  /** Number of posts per page on listings. */
  postsPerPage: 8,
  /** Display ISO 8601 date format if true, otherwise locale-aware. */
  isoDates: false,
  /** Site-wide default for whether posts should display their featured image. */
  showFeaturedImages: true,
  /** Wrap the article body of posts and pages in a bordered, card-like container. */
  boxedArticles: false,
  /** Allow listing cards to grow when title/description content is longer. */
  dynamicPostCardHeight: false,
  /** Automatically generate Open Graph images for posts that don't have a `heroImage`. */
  autoOgImage: true,
  /**
   * Google Search Console verification token (emitted as
   * `<meta name="google-site-verification">` in <head>). Override via the
   * PUBLIC_GOOGLE_SITE_VERIFICATION env var if the site is ever re-verified
   * under a different property.
   */
  googleSiteVerification:
    import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ||
    'nIV5Ncqo8_lgbiAeSi93oCbX7SM3HWfj2Kx_3mKcTFE',
  /** Show a link to the Privacy Policy page in the footer. */
  showPrivacyPolicy: true,
  /** Footer text/link controls. */
  footer: {
    /**
     * Optional full override for the left footer line. Supports {year} and {author}.
     * Default when undefined: "© {year} {author}. All rights reserved." (+ Privacy Policy link if enabled).
     */
    leftText: undefined,
    /**
     * Optional custom text before the theme link on the right footer line.
     * Default when undefined: "Powered by Astro · Theme <themeName>".
     */
    rightText: undefined,
    /** Whether to show the Privacy Policy link in the footer. */
    showPrivacyPolicy: true,
    /** Whether to show theme credits in the footer right side. Theme <themeName> */
    showThemeCredits: false,
    /** Label for the theme repository link in the right footer line. */
    themeName: 'Chirping Astro',
    /** Default upstream theme repository. */
    themeUrl: THEME_REPO_URL,
  },

  // ==========================================
  // ❗ CAN BREAK THINGS (EDIT WITH CAUTION)
  // ==========================================

  /** Public URL of the deployed site, no trailing slash. Breaks SEO/RSS if incorrect. */
  // `||` (not `??`) so an explicitly empty `SITE_URL=` in `.env` also
  // falls back to the default. Astro requires `site` to be a valid URL.
  url: process.env.SITE_URL || 'https://moamenkhadra.github.io',
  /** Supported locales. Changing this requires adding/removing locale folders, content, and i18n entries. */
  locales: locales,
  /** Default locale. Changing this is a breaking, atomic, multi-file operation. */
  defaultLocale: 'en',
  /** Show the language switcher and link to translated pages. */
  multilingual: true,
};

export const NAV: readonly NavItem[] = [
  { key: 'home', href: '/', icon: 'lucide:home' },
  { key: 'projects', href: '/projects', icon: 'lucide:briefcase' },
  { key: 'blog', href: '/blog', icon: 'lucide:newspaper' },
  { key: 'resume', href: '/resume', icon: 'lucide:file-text' },
  { key: 'about', href: '/about', icon: 'lucide:info' },
] as const;

/**
 * Start date for the home page "years of experience" stat (first
 * employment per the resume). Parsed as UTC; the years are computed
 * against the build date.
 */
export const EXPERIENCE_START = '2023-04-01';

/** Core-stack chips rendered under the home hero. */
export const HERO_SKILLS: readonly string[] = [
  'Python',
  'TypeScript',
  'C#',
  '.NET',
  'Angular',
  'Node.js',
  'Flask',
  'Docker',
  'PostgreSQL',
  'Linux',
] as const;

/**
 * Contact + social links. The GitHub / X / email handles can still
 * be overridden via `.env`; WhatsApp, LinkedIn, GitHub, Instagram, X and
 * YouTube fall back to the `CONTACT` constants above so the sidebar never
 * ships broken links. RSS is always present.
 *
 * Need a social network the theme doesn't ship with? Just append a
 * literal entry below — the type is `SocialLink`.
 */
export const SOCIALS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    href: GITHUB_HANDLE ? `https://github.com/${GITHUB_HANDLE}` : CONTACT.github,
    icon: 'simple-icons:github',
  },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: 'simple-icons:linkedin' },
  { label: 'Instagram', href: CONTACT.instagram, icon: 'simple-icons:instagram' },
  {
    label: 'X',
    href: TWITTER_HANDLE ? `https://x.com/${TWITTER_HANDLE}` : CONTACT.x,
    icon: 'simple-icons:x',
  },
  { label: 'YouTube', href: CONTACT.youtube, icon: 'simple-icons:youtube' },
  {
    label: 'WhatsApp',
    href: CONTACT.whatsapp,
    icon: 'simple-icons:whatsapp',
  },
  {
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL || CONTACT.email}`,
    icon: 'lucide:mail',
  },
  { label: 'RSS', href: '/rss.xml', icon: 'lucide:rss' },
].filter(Boolean) as SocialLink[];

/**
 * Giscus comments. Set `enabled: false` to globally disable. Individual
 * posts may opt out via frontmatter `comments: false`.
 *
 * Generate values at https://giscus.app and either set them here or
 * (recommended) provide them via PUBLIC_GISCUS_* env vars at build time.
 */
export const GISCUS: GiscusConfig = {
  enabled: (import.meta.env.PUBLIC_GISCUS_ENABLED ?? 'false') === 'true',
  repo: import.meta.env.PUBLIC_GISCUS_REPO ?? '',
  repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID ?? '',
  category: import.meta.env.PUBLIC_GISCUS_CATEGORY ?? 'Announcements',
  categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ?? '',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  loading: 'lazy',
};

/**
 * Pagefind runtime settings. The index itself is generated by `bun run pagefind`
 * after `astro build` and written to `dist/_pagefind/`.
 */
export const PAGEFIND = {
  /** Public path where the Pagefind bundle is served. */
  bundlePath: '/_pagefind/',
  /** Number of results to render per locale. */
  pageSize: 10,
} as const;
