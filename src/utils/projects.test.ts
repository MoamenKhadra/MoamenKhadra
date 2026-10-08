import { describe, expect, test, mock } from 'bun:test';
import type { CollectionEntry } from 'astro:content';

// `astro:content` only resolves inside the Astro build/dev pipeline, so
// stub it before loading the module under test (we only exercise the
// pure helpers here, never the collection loaders). Static imports are
// hoisted above this call, so the module under test is imported lazily.
mock.module('astro:content', () => ({ getCollection: async () => [] }));

const { projectPath, projectSlug, sortProjects } = await import('./projects');
type Project = Awaited<ReturnType<typeof import('./projects')['getProjects']>>[number];

/** Minimal fake project entry for pure-function tests (no collection I/O). */
function fakeProject(
  id: string,
  opts: { featured?: boolean; pubDate?: Date; lang?: string } = {},
): Project {
  const entry = {
    id,
    collection: 'projects',
    data: {
      title: id,
      description: 'd',
      pubDate: opts.pubDate ?? new Date('2026-01-01'),
      tech: [],
      links: {},
      featured: opts.featured ?? false,
      draft: false,
      lang: opts.lang,
      translationKey: undefined,
    },
    body: '',
  } as unknown as CollectionEntry<'projects'>;
  // Apply the same normalization the module performs internally.
  const segs = id.split(/[\\/]/);
  const lang = (opts.lang ?? (segs[0] === 'ar' ? 'ar' : 'en')) as Project['data']['lang'];
  const translationKey = segs.slice(1).join('/');
  return { ...entry, data: { ...entry.data, lang, translationKey } } as Project;
}

describe('projectSlug', () => {
  test('strips locale prefix and extension', () => {
    expect(projectSlug(fakeProject('en/my-project.md'))).toBe('my-project');
    expect(projectSlug(fakeProject('ar/my-project.md'))).toBe('my-project');
  });

  test('keeps nested paths', () => {
    expect(projectSlug(fakeProject('en/nested/project.mdx'))).toBe('nested/project');
  });
});

describe('projectPath', () => {
  test('default locale has no prefix', () => {
    expect(projectPath(fakeProject('en/my-project.md'))).toBe('/projects/my-project/');
  });

  test('ar locale is prefixed', () => {
    expect(projectPath(fakeProject('ar/my-project.md'))).toBe('/ar/projects/my-project/');
  });
});

describe('sortProjects', () => {
  test('newest first regardless of featured', () => {
    const list = [
      fakeProject('en/old-plain.md', { pubDate: new Date('2025-01-01') }),
      fakeProject('en/new-featured.md', { featured: true, pubDate: new Date('2026-01-01') }),
      fakeProject('en/old-featured.md', { featured: true, pubDate: new Date('2024-01-01') }),
      fakeProject('en/new-plain.md', { pubDate: new Date('2026-06-01') }),
    ];
    expect(sortProjects(list).map((p) => p.id)).toEqual([
      'en/new-plain.md',
      'en/new-featured.md',
      'en/old-plain.md',
      'en/old-featured.md',
    ]);
  });

  test('does not mutate the input array', () => {
    const list = [
      fakeProject('en/a.md', { pubDate: new Date('2025-01-01') }),
      fakeProject('en/b.md', { pubDate: new Date('2026-01-01') }),
    ];
    sortProjects(list);
    expect(list.map((p) => p.id)).toEqual(['en/a.md', 'en/b.md']);
  });
});
