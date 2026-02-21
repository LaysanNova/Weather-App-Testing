import { chromium, expect } from '@playwright/test';
import { BASE_URL } from './config/env';

// export default async function globalSetup() {
//     const retries = 5;
//     const retryDelay = 5000;
//
//     const browser = await chromium.launch({ headless: true });
//     const page = await browser.newPage();
//
//     for (let i = 0; i < retries; i++) {
//         try {
//             console.log(`Attempt ${i + 1} to wake up site: ${BASE_URL}`);
//             await page.goto(BASE_URL, { waitUntil: 'load', timeout: 60000 });
//             await expect(page).toHaveTitle(/MyApp/i, { timeout: 10000 });
//             console.log('✅ Site is awake!');
//             break;
//         } catch (e) {
//             console.log(`⚠ Attempt ${i + 1} failed.`);
//             if (i === retries - 1) {
//                 await browser.close();
//                 throw new Error('Site did not wake up after retries');
//             }
//             await new Promise(res => setTimeout(res, retryDelay));
//         }
//     }
//
//     await browser.close();
// }






import { request } from '@playwright/test';

export default async function globalSetup() {
    const url = process.env.BASE_URL as string;

    const requestContext = await request.newContext();

    const response = await requestContext.get(url);

    if (!response.ok()) {
        throw new Error(`Site is not reachable. Status: ${response.status()}`);
    }

    console.log('✅ Site is awake!');

    await requestContext.dispose();
}