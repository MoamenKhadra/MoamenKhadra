/* global process, Buffer, URL */
/**
 * OG Image generator using Satori + Resvg.
 *
 * Produces a 1200×630 PNG matching the Chirpy Astro theme style:
 * - Indigo-blue gradient background (primary color)
 * - White card with title, description, category, date, and site branding
 * - Clean typography with good contrast
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE, type Locale } from '../config';

export interface OgImageData {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  tags?: string[];
  locale?: Locale;
}

const WIDTH = 1200;
const HEIGHT = 630;

// Load font files from @fontsource (bundled locally, no network needed).
// Mirrors the site's typography: Source Sans 3 (body) and Source Serif 4 /
// Alexandria (display per locale). Noto Naskh Arabic is NOT registered here —
// satori's opentype.js fork cannot parse its Arabic GSUB tables
// ("lookupType: 5 - substFormat: 3"), so Arabic text falls back to
// Alexandria as it did before the typography switch.
const sourceSansDir = join(process.cwd(), 'node_modules/@fontsource/source-sans-3/files');
const bodyRegular = readFileSync(join(sourceSansDir, 'source-sans-3-latin-400-normal.woff'));
const bodyBold = readFileSync(join(sourceSansDir, 'source-sans-3-latin-700-normal.woff'));
const serifDir = join(process.cwd(), 'node_modules/@fontsource/source-serif-4/files');
const serifRegular = readFileSync(join(serifDir, 'source-serif-4-latin-400-normal.woff'));
const serifBold = readFileSync(join(serifDir, 'source-serif-4-latin-700-normal.woff'));
const alexandriaDir = join(process.cwd(), 'node_modules/@fontsource/alexandria/files');
const alexandriaRegular = readFileSync(join(alexandriaDir, 'alexandria-arabic-400-normal.woff'));
const alexandriaBold = readFileSync(join(alexandriaDir, 'alexandria-arabic-700-normal.woff'));

const RTL_LOCALES: ReadonlySet<string> = new Set(['ar']);

/**
 * Satori lays text out with an LTR paragraph direction: it reverses the
 * characters of each Arabic run but keeps runs in logical order. For mixed
 * strings (e.g. "3 مايو 2026") that yields a wrong visual order for RTL
 * readers, so we pre-reverse the whitespace-token order — satori's per-run
 * reversal then produces the correct RTL visual.
 *
 * Pure-Arabic strings must be passed through unchanged (satori already
 * reverses them as a whole). The only exception is trailing punctuation
 * (".", "…"), which satori keeps on the wrong side under LTR embedding —
 * move it to the front so it lands last when read right-to-left.
 */
function toRtlVisual(text: string): string {
  if (!/[\u0600-\u06FF]/.test(text)) return text;
  if (!/[0-9A-Za-z]/.test(text)) {
    const m = /^(.*?)([….]+)$/.exec(text);
    return m && m[1] ? m[2] + m[1] : text;
  }
  return text.split(/\s+/).reverse().join(' ');
}

/**
 * Generate a themed OG image as a PNG buffer.
 */
export async function generateOgImage(data: OgImageData): Promise<Buffer> {
  const rtl = !!data.locale && RTL_LOCALES.has(data.locale);
  const vis = rtl ? toRtlVisual : (s: string) => s;
  // Per-locale stacks mirroring global.css: body face for descriptions and
  // metadata (Arabic reaches Alexandria as the registered Arabic fallback),
  // display face for the title and site brand. Every stack keeps a registered
  // font per script (Latin + Arabic) so satori never hits a missing-glyph
  // error on mixed strings like "3 مايو 2026".
  const bodyStack = 'Source Sans 3, Alexandria';
  const displayStack = rtl
    ? 'Alexandria, Source Sans 3'
    : 'Source Serif 4, Source Sans 3, Alexandria';
  // RTL alignment: single-line text boxes are pushed to the inline end via
  // justifyContent, wrapped lines align with textAlign (satori ignores one
  // of the two depending on whether the text fills its container).
  const alignEnd = rtl ? { textAlign: 'right', justifyContent: 'flex-end' } : {};

  // Truncate for readability at OG image dimensions.
  const rawDesc = data.description
    ? data.description.length > 120
      ? data.description.slice(0, 117) + '…'
      : data.description
    : '';
  const desc = vis(rawDesc);
  const rawTitle = data.title.length > 80 ? data.title.slice(0, 77) + '…' : data.title;
  const title = vis(rawTitle);
  const date = data.date ? vis(data.date) : '';
  const category = data.category ? vis(data.category) : '';

  // Build tag elements for the bottom right.
  const bottomRight =
    data.tags && data.tags.length > 0
      ? data.tags.slice(0, 3).map((tag) => ({
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontSize: '16px',
              color: '#6b7280',
              backgroundColor: '#f3f4f6',
              padding: '4px 12px',
              borderRadius: '12px',
            },
            children: `#${tag}`,
          },
        }))
      : [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontSize: '18px',
                color: '#9ca3af',
              },
              children: new URL(SITE.url).hostname,
            },
          },
        ];

  const markup = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: bodyStack,
        background: rtl
          ? 'linear-gradient(225deg, #1e3a5f 0%, #2a408e 40%, #4a6cf7 100%)'
          : 'linear-gradient(135deg, #1e3a5f 0%, #2a408e 40%, #4a6cf7 100%)',
        padding: '40px',
      },
      children: {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '48px 56px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          },
          children: [
            // === TOP ROW: category + date ===
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: rtl ? 'row-reverse' : 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        backgroundColor: category ? '#eef2ff' : 'transparent',
                        color: '#2a408e',
                        fontSize: '18px',
                        fontWeight: 700,
                        padding: category ? '8px 20px' : '0',
                        borderRadius: '24px',
                        border: category ? '1.5px solid #c7d2fe' : 'none',
                      },
                      children: category,
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        color: '#6b7280',
                        fontSize: '18px',
                      },
                      children: date,
                    },
                  },
                ],
              },
            },
            // === MIDDLE: title + description ===
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flex: '1',
                  justifyContent: 'center',
                },
                children: [
                  {
                    type: 'div',
                    props: {
                    style: {
                      display: 'flex',
                      fontSize: title.length > 60 ? '36px' : '44px',
                      fontWeight: 700,
                      fontFamily: displayStack,
                      color: '#1f2937',
                      lineHeight: 1.2,
                      width: '100%',
                      ...alignEnd,
                    },
                    children: title,
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        fontSize: '22px',
                        color: '#6b7280',
                        lineHeight: 1.4,
                        width: '100%',
                        ...alignEnd,
                      },
                      children: desc,
                    },
                  },
                ],
              },
            },
            // === BOTTOM ROW: branding + tags ===
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: rtl ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  borderTop: '2px solid #e5e7eb',
                  paddingTop: '24px',
                },
                children: [
                  // Left: brand dot + site name
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      },
                      children: [
                        {
                          type: 'div',
                          props: {
                            style: {
                              display: 'flex',
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              backgroundColor: '#2a408e',
                            },
                            children: '',
                          },
                        },
                        {
                          type: 'div',
                          props: {
                        style: {
                          display: 'flex',
                          fontSize: '22px',
                          fontWeight: 700,
                          fontFamily: displayStack,
                          color: '#2a408e',
                        },
                        children: SITE.title,
                          },
                        },
                      ],
                    },
                  },
                  // Right: tags or hostname
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        gap: '8px',
                      },
                      children: bottomRight,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const svg = await satori(markup as any, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Source Sans 3', data: bodyRegular, weight: 400, style: 'normal' },
      { name: 'Source Sans 3', data: bodyBold, weight: 700, style: 'normal' },
      { name: 'Source Serif 4', data: serifRegular, weight: 400, style: 'normal' },
      { name: 'Source Serif 4', data: serifBold, weight: 700, style: 'normal' },
      { name: 'Alexandria', data: alexandriaRegular, weight: 400, style: 'normal' },
      { name: 'Alexandria', data: alexandriaBold, weight: 700, style: 'normal' },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}
