import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const at = (relativePath) => path.join(root, relativePath);
const images = ['becherovka.webp', 'biolage.webp'];

for (const relativePath of ['index.html', 'src/main.jsx', 'src/data.js', 'dist/index.html']) {
  await access(at(relativePath));
}

const bundleNames = await readdir(at('dist/assets'));
if (!bundleNames.some((name) => name.endsWith('.js'))) {
  throw new Error('Production build does not contain a JavaScript bundle.');
}

const sourceData = await readFile(at('src/data.js'), 'utf8');
const portfolio = await readFile(at('src/components/Portfolio.jsx'), 'utf8');
if (!portfolio.includes('src={project.image}') || portfolio.includes('realizace-image-fix-v1')) {
  throw new Error('Portfolio does not use standard React image sources.');
}

for (const name of images) {
  if (!sourceData.includes(`image: '/images/${name}'`)) {
    throw new Error(`Missing local reference for ${name} in src/data.js.`);
  }
  const source = await readFile(at(`public/images/${name}`));
  const built = await readFile(at(`dist/images/${name}`));
  const isWebP = (bytes) =>
    bytes.length >= 20 &&
    bytes.toString('ascii', 0, 4) === 'RIFF' &&
    bytes.toString('ascii', 8, 12) === 'WEBP' &&
    bytes.readUInt32LE(4) + 8 === bytes.length &&
    ['VP8 ', 'VP8L', 'VP8X'].includes(bytes.toString('ascii', 12, 16));
  if (!isWebP(source) || !isWebP(built)) {
    throw new Error(`Invalid WebP file: ${name}.`);
  }
  if (!source.equals(built)) throw new Error(`Bundled WebP differs from source: ${name}.`);
}

console.log('Asset checks passed: both local WebPs are valid and present in the built site.');
