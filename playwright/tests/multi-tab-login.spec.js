const { test, chromium } = require('@playwright/test');

test('เปิด 50 แท็บพร้อมกันและวัด Load Time', async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  const url = 'https://maknet-account.mango-qa.siammakro.cloud/en/auth/onboard?callbackURI=https%3A%2F%2Fmaknet-webapp.mango-qa.siammakro.cloud%2Fen%2Fcallback%2F%3Freferrer%3Dhttps%3A%2F%2Fmaknet-webapp.mango-qa.siammakro.cloud%2Fen';

  const loadTimes = [];

  for (let i = 1; i <= 50; i++) {
    const page = await context.newPage();
    await page.goto(url);

    await page.getByTestId('btn_login_number_or_email').fill(`08${i.toString().padStart(8, '0')}`);

    const perfTimingRaw = await page.evaluate(() => JSON.stringify(window.performance.timing));
    const timing = JSON.parse(perfTimingRaw);
    const loadTime = timing.loadEventEnd - timing.navigationStart;

    console.log(`🕐 Tab ${i} Load Time: ${loadTime} ms`);
    loadTimes.push(loadTime);

    await page.close();
  }

  const avg = loadTimes.reduce((sum, t) => sum + t, 0) / loadTimes.length;
  console.log(`\n📊 Load Time เฉลี่ยของ 50 แท็บ: ${Math.round(avg)} ms`);

  await browser.close();
});
