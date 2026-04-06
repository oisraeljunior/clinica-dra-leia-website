import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const DIRS = ['./public', './src/assets'];

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  if (filePath.endsWith('placeholder.svg')) return;

  const parsed = path.parse(filePath);
  
  try {
    const isAvif = ext === '.avif';
    if(isAvif) return; // skip already avif
    
    // Generate AVIF
    const avifPath = path.join(parsed.dir, `${parsed.name}.avif`);
    await sharp(filePath)
      .avif({ quality: 65, effort: 4 })
      .toFile(avifPath);
    console.log(`Generated ${avifPath}`);

  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      await walkDir(res);
    } else {
      await processFile(res);
    }
  }
}

async function main() {
  for (const dir of DIRS) {
    try {
      await walkDir(dir);
    } catch (e) {
      // dir might not exist, ignore
    }
  }
  console.log("Done generating AVIFs");
}

main();
