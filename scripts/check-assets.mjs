import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const requiredFiles = [
  'index.html',
  'src/main.jsx',
  'public/realizace-image-fix-v1.js',
  'dist/index.html',
  'dist/realizace-image-fix-v1.js',
];

for (const relativePath of requiredFiles) {
  await access(path.join(root, relativePath));
}

const buildAssets = await readdir(path.join(root, 'dist/assets'));
if (!buildAssets.some((file) => file.endsWith('.js'))) {
  throw new Error('The production build does not contain a JavaScript bundle.');
}

const imageScript = await readFile(
  path.join(root, 'public/realizace-image-fix-v1.js'),
  'utf8',
);

for (const name of ['Becherovka', 'Biolage']) {
  const match = imageScript.match(
    new RegExp(`${name}:'data:image/webp;base64,([^']+)'`),
  );

  if (!match) {
    throw new Error(`Missing embedded WebP data for ${name}.`);
  }

  if (!/^[A-Za-z0-9+/=]+$/.test(match[1])) {
    throw new Error(`Embedded data for ${name} contains invalid base64 characters.`);
  }

  const image = Buffer.from(match[1], 'base64');
  const isWebp =
    image.length >= 12 &&
    image.subarray(0, 4).toString('ascii') === 'RIFF' &&
    image.subarray(8, 12).toString('ascii') === 'WEBP';

  if (!isWebp) {
    throw new Error(`Embedded data for ${name} does not have a WebP signature.`);
  }
}

console.log('Asset checks passed.');
