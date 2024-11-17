// @ts-check
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../PageObjects/LoginPage.js');

test.only('Test Login functionality ', async ({page}) => {

  const username = 'student';
  const password = 'Password123';

  const loginPage = new LoginPage(page);

  loginPage.goTo();
  
  loginPage.validLogin(username,password);

  const text = page.getByText('Logged In Successfully');

  // Expect a title "to contain" a substring.
  await expect(text).toContainText('Logged In');

});








test('Test Installation Service Cancelled text is present', async({page}) => {

  let url = 'https://www.bedbathandbeyond.com/myaccount/';

  await page.goto(url);

  await page.locator('input#login-email').fill('bbb.gold@bbb.com');

  await page.locator('input#login-password').fill('Password123');

  await page.locator('button.cl-button.cl-button-lg.cl-button-primary').click();

  const dashboard = await page.getByText('Dashboard');

  await expect(dashboard).toBeVisible();

  await page.locator('div#orders-returns-menu-item').click();

  await page.locator('xpath = //button[contains(@id,"order-details")]').first().click();
  
  await page.waitForSelector('xpath=//h2[normalize-space()="In Your Order"]');
  
  const txt = await page.locator('//div[contains(text(),"Installation Services Cancelled")]');

  //await page.pause();

  expect(txt).toContainText('Installation Services Cancelled');

  //await page.pause();


});
