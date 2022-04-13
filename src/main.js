import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://vagabondbase.com');
await page.screenshot({ path: 'screenshots/full-page.jpg', fullPage: true });
await page.close();
await browser.close();
