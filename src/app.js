const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage();
  await page.goto('https://www.freecodecamp.org/');
  await page.screenshot({path: 'example.png'});
  await page.pdf({ path: 'example.pdf' });

  await browser.close();
})();