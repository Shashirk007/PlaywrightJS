const {test, expect } = require('@playwright/test');

test('Home Page',async ({page}) => {
    await page.goto('https://www.demoblaze.com/')
    const pageTitle=page.title();
    await expect(page).toHaveTitle('STORE');    
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await page.close();

})

// to run the test case is to all the test in one go cmd is  npx playwright test      //--- all in headless mode
// to run only one test file cmd is  npx playwright test HomePageTest.spec.js --headed 
// npx playwright test tests/HomePageTest.spec.js for specific browser