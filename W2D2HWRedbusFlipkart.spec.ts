import { chromium,webkit, test } from "@playwright/test";

test('Red Bus in Edge and Flipkart in Webkit', async () => {

    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    });

    const edgePage = await edgeBrowser.newPage();

    await edgePage.goto('https://www.redbus.in');

    console.log('Red Bus Title:',await edgePage.title());
    console.log('URL:', edgePage.url());

    const webkitBrowser = await webkit.launch({
        headless: false
    });

    const webkitPage = await webkitBrowser.newPage();

    await webkitPage.goto('https://www.flipkart.com');

    console.log('Flipkart Title:',await webkitPage.title());
    console.log('URL:', webkitPage.url());

    await edgePage.waitForTimeout(5000);

    await edgeBrowser.close();
    await webkitBrowser.close();
});