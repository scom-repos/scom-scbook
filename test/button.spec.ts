import {getHTML} from './utils';
import {test, expect } from '@playwright/test';

test('button', async ({ page }) => {
    // page.on('console', msg => console.log(msg.text()))
    const html = await getHTML(`<p>hello</p><i-button top=20 left=20 caption="Button 1"></i-button>`);
    await page.setContent(html)
    // await page.screenshot({path: 'screenshot.png'});    
    const caption = await page.locator('i-button div').innerHTML();
    await expect(caption).toEqual('Button 1')
});