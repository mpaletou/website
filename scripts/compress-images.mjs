import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renameSync, statSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const targets = [
  { file: 'public/images/malo-paletou.jpg', maxWidth: 1200, quality: 82 },
  { file: 'public/images/malo-paletou-portrait.jpg', maxWidth: 1200, quality: 82 },
  { file: 'public/images/malo-paletou-alt.jpg', maxWidth: 1200, quality: 82 },
];

for (const { file, maxWidth, quality } of targets) {
  const path = resolve(ROOT, file);
  const tmp = `${path}.tmp`;
  const before = statSync(path).size;
  await sharp(path)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(tmp);
  renameSync(tmp, path);
  const after = statSync(path).size;
  console.log(
    `${file}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024).toFixed(0)} KB`
  );
}
