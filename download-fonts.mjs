import fs from 'fs/promises';
import path from 'path';

const FONTS = [
  { name: 'Playfair Display', url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PweDVA.woff2', filename: 'playfair-display-400.woff2' },
  { name: 'Playfair Display 500', url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PweGNA.woff2', filename: 'playfair-display-500.woff2' },
  { name: 'Playfair Display 600', url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PwexMA.woff2', filename: 'playfair-display-600.woff2' },
  { name: 'Raleway 300', url: 'https://fonts.gstatic.com/s/raleway/v29/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2', filename: 'raleway-300.woff2' },
  { name: 'Raleway 400', url: 'https://fonts.gstatic.com/s/raleway/v29/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2', filename: 'raleway-400.woff2' },
  { name: 'Cormorant Garamond 300', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpnt_uw.woff2', filename: 'cormorant-garamond-300.woff2' },
];

async function downloadFonts() {
  const fontsDir = path.join(process.cwd(), 'public', 'fonts');
  await fs.mkdir(fontsDir, { recursive: true });

  for (const font of FONTS) {
    const res = await fetch(font.url);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const outPath = path.join(fontsDir, font.filename);
    await fs.writeFile(outPath, buffer);
    console.log(`Downloaded ${font.filename}`);
  }
}

downloadFonts().catch(console.error);
