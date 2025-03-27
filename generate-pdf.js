const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const reportPath = path.resolve(__dirname, '.lighthouseci/lhr-1743092038215.html');
  await page.goto(`file://${reportPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'lighthouse-performance-report.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();
