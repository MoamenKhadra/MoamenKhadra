/**
 * Project helpers (portfolio projects collection).
 *
 * Mirrors the structure of `utils/posts.ts` but stays lean — projects
 * have no tags/categories/draft listings beyond the basics:
 *  - filter drafts in production
 *  - infer locale from filesystem path (projects/en/foo -> 'en')
 *  - sort: pubDate desc
 *  - resolve translation siblings via `translationKey`
 */

import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

import { SITE, type Locale } from '../config';
import { withBase } from '../i18n/utils';

export type Project = CollectionEntry<'projects'> & {
  data: CollectionEntry<'projects'>['data'] & { lang: Locale; translationKey: string };
};

const isProd = import.meta.env.PROD;
const skipProjectCollections = import.meta.env.CI_SKIP_CONTENT_COLLECTIONS === 'true';

/** Derive the locale from `projects/<locale>/foo` slug-ish ID. */
function localeFromId(id: string): Locale {
  const seg = id.split(/[\\/]/)[0];
  if (seg && (SITE.locales as readonly string[]).includes(seg)) return seg as Locale;
  return SITE.defaultLocale;
}

/** Strip locale prefix from a content ID. */
function stripLocaleFromId(id: string): string {
  const segs = id.split(/[\\/]/);
  if (segs[0] && (SITE.locales as readonly string[]).includes(segs[0])) {
    return segs.slice(1).join('/');
  }
  return id;
}

/** Normalize a project entry: ensure `lang` and `translationKey` are set. */
function normalize(entry: CollectionEntry<'projects'>): Project {
  const lang = entry.data.lang ?? localeFromId(entry.id);
  const translationKey = entry.data.translationKey ?? stripLocaleFromId(entry.id);
  return {
    ...entry,
    data: { ...entry.data, lang, translationKey },
  } as Project;
}

/** Public slug used for the URL: filename minus locale and extension. */
export function projectSlug(entry: Project): string {
  return stripLocaleFromId(entry.id).replace(/\.(md|mdx)$/i, '');
}

/** Full localized URL path for a project. */
export function projectPath(entry: Project): string {
  const slug = projectSlug(entry);
  const path =
    entry.data.lang === SITE.defaultLocale
      ? `/projects/${slug}/`
      : `/${entry.data.lang}/projects/${slug}/`;
  return withBase(path);
}

/** Sort projects: newest first (pubDate desc). */
export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const at = a.data.pubDate?.valueOf?.() ?? 0;
    const bt = b.data.pubDate?.valueOf?.() ?? 0;
    return bt - at;
  });
}

/** Get all projects for a locale (drafts hidden in prod, sorted). */
export async function getProjects(locale: Locale): Promise<Project[]> {
  if (skipProjectCollections) return [];
  const all = await getCollection('projects', (entry) => {
    if (isProd && entry.data.draft) return false;
    const lang = entry.data.lang ?? localeFromId(entry.id);
    return lang === locale;
  });
  return sortProjects(all.map(normalize));
}

/**
 * Featured projects for the home page. Falls back to the newest projects
 * when nothing is flagged `featured: true`, so the section never renders
 * empty on a fresh site.
 */
export async function getFeaturedProjects(locale: Locale, limit = 4): Promise<Project[]> {
  const all = await getProjects(locale);
  const featured = all.filter((p) => p.data.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

/** Find a single project by locale + slug (path-relative). */
export async function getProjectBySlug(
  locale: Locale,
  slug: string,
): Promise<Project | undefined> {
  const projects = await getProjects(locale);
  return projects.find((p) => projectSlug(p) === slug);
}

/** All translation siblings of a project (other locales sharing translationKey). */
export async function getProjectTranslations(
  entry: Project,
): Promise<Record<Locale, Project | undefined>> {
  const out: Partial<Record<Locale, Project | undefined>> = {};
  for (const locale of SITE.locales) {
    if (locale === entry.data.lang) {
      out[locale] = entry;
      continue;
    }
    const all = await getProjects(locale);
    out[locale] = all.find((p) => p.data.translationKey === entry.data.translationKey);
  }
  return out as Record<Locale, Project | undefined>;
}

/**
 * The raw hero image, suitable for passing straight to `<SmartImage>`.
 * Preserves the `ImageMetadata` shape (so the image pipeline can use
 * intrinsic dimensions) for assets imported via the `image()` schema, and
 * prefixes `withBase()` only on plain `/public/...` strings.
 */
export function projectHeroImage(project: Project): ImageMetadata | string | undefined {
  const img = project.data.heroImage;
  if (!img) return undefined;
  if (typeof img === 'string') {
    return img.startsWith('/') && !img.startsWith('//') ? withBase(img) : img;
  }
  return img as ImageMetadata;
}
