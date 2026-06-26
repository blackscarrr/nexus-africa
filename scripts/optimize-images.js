#!/usr/bin/env node
/**
 * Nexus Africa - image optimizer
 *
 * Usage:
 *   node scripts/optimize-images.js <category>
 *
 * Categories: artists | art-pieces | community | media | partners
 *
 * How it works:
 *   1. Put your raw, full-size photos into:  raw-images/<category>/
 *   2. Run:  node scripts/optimize-images.js <category>
 *   3. Resized, compressed copies land in:   images/<category>/
 *      (filenames are kept the same, just the file contents are optimized)
 *
 * Example:
 *   raw-images/artists/rose-mwangi.jpg
 *   -> node scripts/optimize-images.js artists
 *   -> images/artists/rose-mwangi.jpg  (resized + compressed)
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const VALID_CATEGORIES = ['artists', 'art-pieces', 'community', 'media', 'partners'];

// Max width per category - portraits/squares don't need to be huge,
// wide community/media shots can stay a bit larger.
const MAX_WIDTH = {
  artists: 800,
  'art-pieces': 1200,
  community: 1400,
  media: 1400,
  partners: 600,
};

const category = process.argv[2];

if (!category || !VALID_CATEGORIES.includes(category)) {
  console.error(`Please specify a category: ${VALID_CATEGORIES.join(', ')}`);
  console.error(`Example: node scripts/optimize-images.js artists`);
  process.exit(1);
}

const inputDir = path.join(process.cwd(), 'raw-images', category);
const outputDir = path.join(process.cwd(), 'public', 'images', category);

if (!fs.existsSync(inputDir)) {
  console.error(`No folder found at raw-images/${category}/`);
  console.error(`Create it and put your raw photos there first.`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter((f) =>
  /\.(jpe?g|png|webp)$/i.test(f)
);

if (files.length === 0) {
  console.log(`No image files found in raw-images/${category}/`);
  process.exit(0);
}

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const outputPath = path.join(outputDir, `${baseName}.jpg`);

    const maxWidth = MAX_WIDTH[category];

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outputPath);

    const beforeKb = (fs.statSync(inputPath).size / 1024).toFixed(0);
    const afterKb = (fs.statSync(outputPath).size / 1024).toFixed(0);
    console.log(`${file}: ${beforeKb}KB -> ${path.basename(outputPath)}: ${afterKb}KB`);
  }
  console.log(`\nDone. ${files.length} image(s) optimized into images/${category}/`);
})();
