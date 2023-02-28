import {test, expect } from '@playwright/test';

test('Module1', async ({ page }) => {
    page.on("pageerror", (err) => {
        console.log(err.message)
    })
    await page.goto('http://localhost:8080/modules/module1.html');        
    await page.screenshot({path: __dirname + '/screenshot/module1.png'});        
});