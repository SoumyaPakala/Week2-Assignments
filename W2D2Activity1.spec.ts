
import {test} from "@playwright/test"

test ('launch salesforce application' , async ({page}) => {

    await page.goto('https://login.salesforce.com/?locale=in')

    await page.locator('input[type="email"]').fill('soumyapakala13@gmail.com')

    await page.getByText('Continue').click();

    await page.locator('input[type="password"]').fill('Testleaf@2026')

    await page.getByText('Log In').click();
    
})