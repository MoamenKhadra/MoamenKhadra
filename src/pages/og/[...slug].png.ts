/**
 * Dynamic OG image endpoint.
 *
 * Generates a 1200×630 PNG for each post/project that doesn't have a
 * custom heroImage. Entries WITH a heroImage get their image used as the
 * OG directly (handled in the SEO/layout layer) — this endpoint only
 * produces fallback images for entries that lack one.
 *
 * Route: /og/[...slug].png
 * Example: /og/welcome.png → OG image for the "welcome" post (EN)
 *          /og/projects/devboard-cli.png → OG image for a project (EN)
 *          /og/ar/projects/devboard-cli.png → same project (AR)
 */
/* global Response */
import type { GetStaticPaths } from 'astro';
import { generateOgImage } from '../../utils/og-image';
import { getPosts, postSlug } from '../../utils/posts';
import { getProjects, projectSlug } from '../../utils/projects';
import { SITE, type Locale } from '../../config';
import { formatDate, useTranslations } from '../../i18n/utils';

type OgEntry = {
  title: string;
  description: string;
  date?: string;
  category?: string;
  tags: string[];
  locale: Locale;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // When autoOgImage is disabled, or skipped via CI flag, generate no OG images.
  if (!SITE.autoOgImage || import.meta.env.CI_SKIP_AUTO_OG_IMAGE === 'true') return [];

  const paths: Array<{ params: { slug: string }; props: { entry: OgEntry } }> = [];

  for (const locale of SITE.locales) {
    const prefix = locale === SITE.defaultLocale ? '' : `${locale}/`;

    // Default site-wide card for pages without a page-specific og:image
    // (home, listings, about, …). Route: /og/site.png + /og/ar/site.png.
    paths.push({
      params: { slug: `${prefix}site` },
      props: {
        entry: {
          title: SITE.title,
          description: useTranslations(locale)('site.metaDescription'),
          tags: [],
          locale,
        },
      },
    });

    const posts = await getPosts(locale);
    for (const post of posts) {
      // Skip posts that already have a custom heroImage to save build time.
      if (post.data.heroImage) continue;
      paths.push({
        params: { slug: `${prefix}${postSlug(post)}` },
        props: {
          entry: {
            title: post.data.title,
            description: post.data.description,
            date: post.data.pubDate ? formatDate(post.data.pubDate, locale) : undefined,
            category: post.data.categories[0],
            tags: post.data.tags,
            locale,
          },
        },
      });
    }

    const projects = await getProjects(locale);
    for (const project of projects) {
      // Skip projects that already have a custom heroImage.
      if (project.data.heroImage) continue;
      paths.push({
        params: { slug: `${prefix}projects/${projectSlug(project)}` },
        props: {
          entry: {
            title: project.data.title,
            description: project.data.description,
            date: project.data.pubDate ? formatDate(project.data.pubDate, locale) : undefined,
            tags: project.data.tech,
            locale,
          },
        },
      });
    }
  }
  return paths;
};

interface Props {
  entry: OgEntry;
}

export async function GET({ props }: { props: Props }) {
  const { entry } = props;

  const png = await generateOgImage({
    title: entry.title,
    description: entry.description,
    date: entry.date,
    category: entry.category,
    tags: entry.tags,
    locale: entry.locale,
  });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
