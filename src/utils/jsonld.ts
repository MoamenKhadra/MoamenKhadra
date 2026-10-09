/**
 * JSON-LD (schema.org) structured-data builders.
 *
 * Rendered by <JsonLd /> in <head>. Every block is a plain object; the
 * component wraps multiple blocks in a single `@graph`. All URLs are
 * absolute (SITE.url + base) so crawlers never see relative references.
 */
/* global URL */
import { SITE, SITE_IMAGES, SOCIALS, type Locale } from '../config';
import { withBase } from '../i18n/utils';

export type JsonLd = Record<string, unknown>;

function absolute(path: string): string {
  return new URL(withBase(path), SITE.url).toString();
}

function avatarSrc(): string {
  const avatar = SITE_IMAGES.avatar;
  return typeof avatar === 'string' ? avatar : avatar.src;
}

/** The site owner — referenced as `author`/`publisher` by the page types. */
export function personJsonLd(): JsonLd {
  return {
    '@type': 'Person',
    name: SITE.author.name,
    url: absolute('/'),
    ...(SITE.author.bio && { jobTitle: SITE.author.bio }),
    image: absolute(avatarSrc()),
    sameAs: SOCIALS.filter((s) => /^https?:/i.test(s.href)).map((s) => s.href),
  };
}

/** Sitewide WebSite node (name/url/language). */
export function websiteJsonLd(locale: Locale): JsonLd {
  return {
    '@type': 'WebSite',
    name: SITE.title,
    description: SITE.description,
    url: SITE.url,
    inLanguage: locale,
  };
}

interface BlogPostingArgs {
  title: string;
  description: string;
  /** Absolute canonical URL (from SeoMeta). */
  canonical: string;
  /** Absolute og:image URL (from SeoMeta). */
  image?: string;
  published?: Date;
  modified?: Date;
  tags?: string[];
  locale: Locale;
}

/** BlogPosting node for post pages (skip for noindex/unlisted posts). */
export function blogPostingJsonLd(args: BlogPostingArgs): JsonLd {
  return {
    '@type': 'BlogPosting',
    headline: args.title,
    description: args.description,
    mainEntityOfPage: args.canonical,
    ...(args.image && { image: [args.image] }),
    ...(args.published && { datePublished: args.published.toISOString() }),
    ...(args.modified && { dateModified: args.modified.toISOString() }),
    ...(args.tags?.length && { keywords: args.tags.join(', ') }),
    inLanguage: args.locale,
    author: personJsonLd(),
    publisher: personJsonLd(),
  };
}

interface CreativeWorkArgs {
  title: string;
  description: string;
  /** Absolute canonical URL (from SeoMeta). */
  canonical: string;
  /** Absolute og:image URL (from SeoMeta). */
  image?: string;
  dateCreated?: Date;
  keywords?: string[];
  locale: Locale;
}

/** CreativeWork node for project pages. */
export function creativeWorkJsonLd(args: CreativeWorkArgs): JsonLd {
  return {
    '@type': 'CreativeWork',
    name: args.title,
    description: args.description,
    url: args.canonical,
    ...(args.image && { image: args.image }),
    ...(args.dateCreated && { dateCreated: args.dateCreated.toISOString() }),
    ...(args.keywords?.length && { keywords: args.keywords.join(', ') }),
    inLanguage: args.locale,
    author: personJsonLd(),
  };
}

/** BreadcrumbList from the layout's `crumbs` (name + absolute URL each). */
export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; url: string }>,
): JsonLd | undefined {
  if (items.length === 0) return undefined;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
