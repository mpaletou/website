/**
 * Generate screenshots and favicons for all client sites.
 * Run with: npm run screenshots
 *
 * Requires playwright: npm install playwright && npx playwright install chromium
 *
 * Output:
 *   public/screenshots/{domain}.jpg  — full-page screenshot (1280×800 viewport)
 *   public/favicons/{domain}.png     — site favicon
 *
 * Cached: files are skipped if they already exist. Delete them to regenerate.
 */

import { chromium } from 'playwright';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const SCREENSHOTS_DIR = resolve(ROOT, 'public/screenshots');
const FAVICONS_DIR = resolve(ROOT, 'public/favicons');

// All client domains
const DOMAINS = [
  // Active
  'imajing.eu',
  'ipedis.com',
  'arianeconseil.online',
  'pnr-millevaches.fr',
  'matiere-premiere.com',
  // Periodic
  'senscellbio.com',
  'cynkle.fr',
  'pallad.fr',
  'solefarma.com',
  'maillot-podologie.com',
  'sportyjob.com',
  'snazzy.fr',
  'klappagency.com',
  'hackerouvert.fr',
  'makemestay.com',
  'occitem.fr',
  'filevert.fr',
  'ethersys.fr',
  'infogerant.com',
  'mon-autoentreprise.fr',
  'stetoo.com',
  'mdp-data.com',
  'docaposte.com',
  // Ended
  'cozynergy.com',
  'getboxy.co',
  'acadia-info.com',
  'cofondateur.fr',
  'asb-digital.fr',
  'chocolats-pralus.com',
  'compilatio.net',
  'myfamilyup.com',
  'ilexenvironnement.fr',
  'webexpr.fr',
  'medicall.fr',
  'infrafon.com',
  'animalwebaction.com',
  // Project
  'datashelter.tech',
];

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

async function run() {
  ensureDir(SCREENSHOTS_DIR);
  ensureDir(FAVICONS_DIR);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  let ok = 0, skipped = 0, failed = 0;

  for (const domain of DOMAINS) {
    const screenshotPath = resolve(SCREENSHOTS_DIR, `${domain}.jpg`);
    const faviconPath = resolve(FAVICONS_DIR, `${domain}.png`);
    const url = `https://${domain}`;

    const needsScreenshot = !existsSync(screenshotPath);
    const needsFavicon = !existsSync(faviconPath);

    if (!needsScreenshot && !needsFavicon) {
      console.log(`⏭  Skipped  ${domain} (cached)`);
      skipped++;
      continue;
    }

    const page = await context.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'fr-FR,fr;q=0.9' });

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      // Brief pause to let above-the-fold content paint
      await page.waitForTimeout(1500);

      if (needsScreenshot) {
        await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 75 });
      }

      if (needsFavicon) {
        // Try to extract the best favicon URL from the page
        const faviconUrl = await page.evaluate(() => {
          const selectors = [
            'link[rel="apple-touch-icon"]',
            'link[rel="icon"][sizes="192x192"]',
            'link[rel="icon"][sizes="128x128"]',
            'link[rel="shortcut icon"]',
            'link[rel="icon"]',
          ];
          for (const sel of selectors) {
            const el = document.querySelector(sel);
            if (el?.href) return el.href;
          }
          return null;
        });

        if (faviconUrl) {
          const resp = await page.request.get(faviconUrl);
          if (resp.ok()) {
            writeFileSync(faviconPath, await resp.body());
          }
        } else {
          // Fallback: try /favicon.ico
          try {
            const resp = await page.request.get(`${url}/favicon.ico`);
            if (resp.ok()) writeFileSync(faviconPath, await resp.body());
          } catch (_) {}
        }
      }

      console.log(`✓  Done     ${domain}`);
      ok++;
    } catch (err) {
      console.error(`✗  Failed   ${domain}: ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await context.close();
  await browser.close();
  console.log(`\nDone: ${ok} captured, ${skipped} skipped, ${failed} failed.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
