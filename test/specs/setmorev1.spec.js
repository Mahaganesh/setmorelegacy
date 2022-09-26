const loginn = require('../pageobjects/login.page')

describe("Setmore Legacy Login", ()=>
{
    it('sign up with setmore', async ()=>
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await browser.waitUntil(
            async () => (await $("//h1[@class='left page-name']").getText()) === 'Calendar',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await $("//a[@class='settings-icon']").click()
        await browser.waitUntil(
            async () => (await $('//*[@id="settingsSideNav"]/ul/li[3]/a/span').getText()) === 'Services',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await $('//*[@id="settingsSideNav"]/ul/li[3]/a/span').click()
        let date = new Date();
        date.setSeconds(date.getSeconds() + 70);
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

    })
    
})

