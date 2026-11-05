import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve('out');
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
const html = readFileSync(join(root, 'index.html'), 'utf8');
assert(html.includes('A little above'), 'Homepage content is missing');
assert(html.includes('American Fusion Platter'), 'Offer content is missing');
assert(html.includes(prefix + '/images/19.webp'), 'Hero asset has the wrong base path');
const local = [...html.matchAll(/<(?:img|script|link)\b[^>]*?\b(?:src|href)="([^"#]+)"/g)]
  .map(m => m[1]).filter(x => x.startsWith('/'));
for (const url of local) {
  assert(!prefix || url.startsWith(prefix + '/'), 'Unprefixed asset: ' + url + '\n' + [...html.matchAll(/<(?:img|script|link)\\b[^>]*>/g)].map(m => m[0]).join('\n'));
  const relative = url.slice(prefix.length).split(/[?#]/)[0];
  assert(existsSync(join(root, relative)), 'Missing exported asset: ' + url);
}
function verifyCss(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) verifyCss(path);
    else if (entry.name.endsWith('.css')) {
      const css = readFileSync(path, 'utf8');
      assert(!css.includes("url('/fonts/") && !css.includes('url(/fonts/'), 'Unprefixed font URL');
      for (const match of css.matchAll(/url\\(([^)]+)\\)/g)) {
        const url = match[1].replace(/^['"]|['"]$/g, '');
        if (!url.startsWith('/') || url.startsWith('//')) continue;
        assert(!prefix || url.startsWith(prefix + '/'), 'Unprefixed CSS asset: ' + url);
        assert(existsSync(join(root, url.slice(prefix.length).split(/[?#]/)[0])), 'Missing CSS asset: ' + url);
      }
    }
  }
}
verifyCss(join(root, '_next'));
console.log('Export verified: homepage, offers, scripts, styles, images and font URLs.');
