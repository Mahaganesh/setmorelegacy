const loginn = require('../pageobjects/login.page')


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Service Legacy', () =>
{
    xit('Create appointment with booking page', async () =>
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        // await WaitUntill.WaitUntil2("//h1[@class='left page-name']", 'Calendar')

        await browser.waitUntil(async () => (await $("//h1[@class='left page-name']").getText()) === 'Calendar',
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
                timeoutMsg: 'Timeout Service page'
            }
        );
        await $('//*[@id="compKey"]').click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Your our service',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Booking page header'
            }
        );
        await $('//li[@id="78a69456-c69f-40ef-b1fa-55d5d5b21298"]').click()
        await browser.waitUntil(async () => (await $("//label[@class='g-drop-label']").getText()) === 'Your time zone',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout date and time page'
            }
        );
        await $("//div[@class='time-sheet false']/ul/li[1]").click()
        await browser.waitUntil(async () => (await $("//h4[@class='heading-2 text-center']").getText()) === 'No profile yet?',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout signup page'
            }
        );
        await $("//a[@class='btn-link']").click()
        
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Your information',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout customer details page'
            }
        );
        await $('//*[@id="name"]/input').setValue(date)
        await $("//div[@class='cta-wrap']/button").click()
        
        await browser.waitUntil(async () => (await $("//button[@data-testid='book-another-appointment']/span").getText()) === 'Book another our service',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    }),

    it('Service page URL', async() => 
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
        await $('//*[@id="settingsSideNav"]/ul/li[3]/a/span').click()
        await browser.waitUntil(
            async () => (await $("//ul[@id='servicesList']")),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        await $("//ul[@id='servicesList']/li[1]").click()
        await browser.waitUntil(async () => (await $("//div[@class='url-view-service']")),{timeout: 30000, timeoutMsg: 'Timeout Calender page'});
        await $("//div[@class='url-view-service']").click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Choose our team',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Booking page header'
            }
        );
        await $('//li[@id="rdb6f1655193119216"]').click()
        await browser.waitUntil(async () => (await $("//label[@class='g-drop-label']").getText()) === 'Your time zone',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout date and time page'
            }
        );
        await $("//div[@class='time-sheet false']/ul/li[1]").click()
        await browser.waitUntil(async () => (await $("//h4[@class='heading-2 text-center']").getText()) === 'No profile yet?',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout signup page'
            }
        );
        await $("//a[@class='btn-link']").click()
        
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Your information',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout customer details page'
            }
        );
        await $('//*[@id="name"]/input').setValue(date)
        await $("//div[@class='cta-wrap']/button").click()
        
        await browser.waitUntil(async () => (await $("//button[@data-testid='book-another-appointment']/span").getText()) === 'Book another our service',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        // await browser.saveScreenshot('screenshot/'+date+'screenshot.png')
    });
})