const loginn = require('../pageobjects/login.page')



let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Class Legacy', ()=>
{
    xit('Create Class', async()=>
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await browser.waitUntil(
            async () => (await $("//h1[@class='left page-name']").getText()) === 'Calendar',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        )
        await $("//a[@class='settings-icon']").click()
        await browser.waitUntil(
            async () => (await $('//*[@id="settingsSideNav"]/ul/li[3]/a/span').getText()) === 'Services',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await $('//*[@id="settingsSideNav"]/ul/li[5]/a/span').click()
        await $('//*[@id="addNewClass"]').click()
        await browser.waitUntil(
            async () => (await $('//*[@id="class_title"]')),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await $('//*[@id="class_title"]').setValue(date)
        await $('//*[@id="class_duration"]').setValue(5)
        await $('//*[@id="saveNewClass"]').click()
        await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        await browser.waitUntil(
            async () => (await $("//*[@id='classCategoryHeader']/ul/li/span[@class='class-cat-name']").getText()) === 'All Class Bookings',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout page'
            }
        )
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')
    })
})