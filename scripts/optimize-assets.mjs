/**
 * Сжимает изображения в src/assets/cours и src/assets/logo:
 * — WebP рядом с исходниками (PNG/JPEG сохраняются как исходные мастеры)
 * — курс: max ширина 1440 px (герой 16:9 на экранах до ~720 CSS px в 2x)
 * — логотипы: max высота 240 px (~2× от отображения 112px в PartnersLogoMarquee)
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC_ASSETS = path.join(ROOT, 'src', 'assets');

async function existsDir(p) {
  try {
    const s = await fs.stat(p);
    return s.isDirectory();
  } catch {
    return false;
  }
}

async function convertOne(inputPath, { maxWidth, maxHeight }) {
  const base = inputPath.slice(0, -path.extname(inputPath).length);
  const outputPath = `${base}.webp`;

  let img = sharp(inputPath).rotate(); // учёт EXIF orientation

  if (maxWidth) {
    img = img.resize({ width: maxWidth, withoutEnlargement: true });
  }
  if (maxHeight) {
    img = img.resize({ height: maxHeight, withoutEnlargement: true });
  }

  await img.webp({ quality: 82, effort: 4 }).toFile(outputPath);

  const inStat = await fs.stat(inputPath);
  const outStat = await fs.stat(outputPath);
  const saved = Math.round((1 - outStat.size / inStat.size) * 100);
  console.log(`  OK ${path.basename(outputPath)}  (${formatKb(inStat.size)} → ${formatKb(outStat.size)}  −${saved}%)`);
}

function formatKb(n) {
  return `${Math.round(n / 1024)} KiB`;
}

async function walkConvert(dir, rule) {
  if (!(await existsDir(dir))) {
    console.warn(`[optimize-assets] Пропуск: нет папки ${path.relative(ROOT, dir)}`);
    return;
  }

  const entries = await fs.readdir(dir, { withFileTypes: true });
  const inputs = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => /\.(png|jpe?g)$/i.test(name));

  if (!inputs.length) {
    console.log(`[optimize-assets] В ${path.relative(ROOT, dir)} нет PNG/JPEG.`);
    return;
  }

  console.log(`[optimize-assets] ${path.relative(ROOT, dir)} → ${inputs.length} файл(ов)`);
  for (const name of inputs) {
    const inputPath = path.join(dir, name);
    try {
      await convertOne(inputPath, rule);
    } catch (e) {
      console.error(`  ERR ${name}:`, e.message ?? e);
    }
  }
}

async function main() {
  console.log('[optimize-assets] sharp → WebP\n');
  await walkConvert(path.join(SRC_ASSETS, 'cours'), { maxWidth: 1440 });
  await walkConvert(path.join(SRC_ASSETS, 'logo'), { maxHeight: 240 });
  console.log('\n[optimize-assets] Готово. Пересобери проект: npm run build');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
