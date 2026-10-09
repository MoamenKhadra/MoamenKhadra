/* global URL */
import { SITE, type Locale } from '../config';
import { alternates, useTranslations, withBase } from '../i18n/utils';

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  locale: Locale;
  hreflangs: ReturnType<typeof alternates>;
  /**
   * When `true`, the SEO component emits
   * `<meta name="robots" content="noindex, nofollow">`.
   * Set automatically for unlisted posts/pages when
   * `unlistedHideFromSeo` is `true` (the default).
   */
  noindex?: boolean;
}

interface BuildSeoArgs {
  title?: string;
  description?: string;
  pathWithoutLocale: string;
  fullPath: string;
  locale: Locale;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: Date;
  modifiedTime?: Date;
  tags?: string[];
  /**
   * Restrict hreflang alternates to a subset of locales. Used on post
   * pages where a translation may be missing.
   */
  availableLocales?: readonly Locale[];
  /** Emit `<meta name="robots" content="noindex, nofollow">`. */
  noindex?: boolean;
}

/** Build the SEO data block consumed by `<SEO />`. */
export function buildSeo(args: BuildSeoArgs): SeoMeta {
  const t = useTranslations(args.locale);
  // Page-specific og image → generated per-locale site card → static asset
  // (only when auto-OG is enabled; the endpoint emits nothing under
  // `CI_SKIP_AUTO_OG_IMAGE`, so fall back to the static default there).
  const autoOgEnabled = SITE.autoOgImage && import.meta.env.CI_SKIP_AUTO_OG_IMAGE !== 'true';
  const ogPrefix = args.locale === SITE.defaultLocale ? '' : `${args.locale}/`;
  const defaultOg = autoOgEnabled ? `/og/${ogPrefix}site.png` : SITE.defaultOgImage;
  return {
    title: args.title && args.title !== SITE.title ? `${args.title} — ${SITE.title}` : SITE.title,
    description: args.description ?? t('site.metaDescription'),
    canonical: new URL(args.fullPath, SITE.url).toString(),
    ogImage: new URL(withBase(args.ogImage ?? defaultOg), SITE.url).toString(),
    type: args.type ?? 'website',
    publishedTime: args.publishedTime?.toISOString(),
    modifiedTime: args.modifiedTime?.toISOString(),
    tags: args.tags,
    locale: args.locale,
    hreflangs: alternates(args.pathWithoutLocale, args.availableLocales),
    noindex: args.noindex,
  };
}
