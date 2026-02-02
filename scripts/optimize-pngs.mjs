#!/usr/bin/env node
/**
 * Compress all PNGs in public/ to reduce file size for better performance.
 * Run: node scripts/optimize-pngs.mjs (or npm run optimize:pngs)
 * Requires: npm install sharp --save-dev
 */

import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

async function findPngs(dir, list = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      await findPngs(full, list);
    } else if (extname(e.name).toLowerCase() === '.png') {
      list.push(full);
    }
  }
  return list;
}

async function main() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error('sharp not found. Run: npm install sharp --save-dev');
    process.exit(1);
  }

  const pngs = await findPngs(PUBLIC_DIR);
  if (pngs.length === 0) {
    console.log('No PNG files found in public/');
    return;
  }

  console.log(`Optimizing ${pngs.length} PNG(s)...`);
  let saved = 0;
  for (const p of pngs) {
    try {
      const before = (await stat(p)).size;
      const buf = await sharp(p)
        .png({ compressionLevel: 9, palette: false })
        .toBuffer();
      const after = buf.length;
      if (after < before) {
        const { writeFile } = await import('fs/promises');
        await writeFile(p, buf);
        const pct = ((1 - after / before) * 100).toFixed(1);
        console.log(`  ${p.replace(PUBLIC_DIR, 'public')}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (-${pct}%)`);
        saved++;
      }
    } catch (err) {
      console.warn(`  Skip ${p}: ${err.message}`);
    }
  }
  console.log(`Done. Optimized ${saved} file(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
