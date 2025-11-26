import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3001');
  await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });

  await browser.close();
  console.log('Screenshot saved to screenshots/homepage.png');
})();
