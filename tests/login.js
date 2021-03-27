Feature('Login');

const { expect } = require('chai')
const { createArticle } = require('../api/page/create-article-page')
const { getToken } = require('../api/page/get-token-page')
const { dataToken } = require('../api/data/get-token-data')
const { dataArticle } = require('../api/data/create-article-data')
const faker = require('faker')

const generateTitle = faker.internet.userName();

let response = '';
Scenario.only('Create data menggunakan API', async ({ I }) => {
    // buka homepage
    await I.amOnPage('/')
    // click sign in
    await I.click('Sign in')
    // verify text
    await I.waitForText('Need an account?', process.env.TIMEOUT)
    // mengisi form login
    await I.fillField({ css: 'input[placeholder=Email]' }, 'poiqwe1234524@gmail.com')
    await I.fillField({ css: 'input[placeholder=Password]' }, 'poiqwe123456')
    await I.click({ css: 'button[type=submit]' })
    // verify 
    await I.see('richirin')
    await I.click('richirin')
    await I.dontSee(generateTitle);
    // hit api get token
    response = await getToken(dataToken);
    // hit api create article
    dataArticle.article.title = generateTitle;
    response = await createArticle(response.body.user.token, dataArticle)
    await I.amOnPage('/')
    await I.see('richirin')
    await I.click('richirin')
    await I.see(generateTitle)
});