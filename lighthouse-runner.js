const { launch } = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// dynamic import for lighthouse (ESM)
async function getLighthouse() {
  const mod = await import('lighthouse');
  return mod.default;
}

(async () => {
  const lighthouse = await getLighthouse();
  const chrome = await launch({ chromeFlags: ['--headless'] });

  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(
    'https://maknet-account.mango-qa.siammakro.cloud/en/auth/onboard',
    options
  );

  const reportPath = path.join(__dirname, 'lighthouse-report.html');
  fs.writeFileSync(reportPath, runnerResult.report);

  console.log('✅ Performance score:', runnerResult.lhr.categories.performance.score * 100);
  console.log(`📄 Report saved to: ${reportPath}`);

  await chrome.kill();
})();