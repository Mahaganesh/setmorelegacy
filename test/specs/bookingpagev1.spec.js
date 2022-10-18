const loginn = require('../pageobjects/login.page')
const waitforvalue = require('../pageobjects/wait.page')
const bookingwaitforvalue = require('../pageobjects/booking.page')

let date = new Date();
date.setSeconds(date.getSeconds());

describe('Setmore Service Legacy', () => {
    it('Create appointment with booking page', async () => {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await waitforvalue.waitforcalender()
        await waitforvalue.waitforerrormsg()
        // await waitforvalue.xpathsetmore.click()
        await $("//a[@class='settings-icon']").click()
        await waitforvalue.waitforservice()
        await $('//*[@id="compKey"]').click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await bookingwaitforvalue.waitforservice()
        await $('//li[@id="78a69456-c69f-40ef-b1fa-55d5d5b21298"]').click()
        await bookingwaitforvalue.waitfortimezone()
        await $("//div[@class='time-sheet false']/ul/li[1]").click()
        await bookingwaitforvalue.waitfornoprofile()
        await $("//a[@class='btn-link']").click()
        await bookingwaitforvalue.waitforyourinformation()
        await $('//*[@id="name"]/input').setValue(date)
        await $("//div[@class='cta-wrap']/button").click()
        await bookingwaitforvalue.waitforbookanotherservice()
        await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    }),

        xit('Service page URL', async () => {
            await browser.url('/')
            // await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
            await waitforvalue.waitforcalender()
            await waitforvalue.waitforerrormsg()

            await $("//a[@class='settings-icon']").click()
            await waitforvalue.waitforservice()
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
            await browser.waitUntil(async () => (await $("//div[@class='url-view-service']")), { timeout: 30000, timeoutMsg: 'Timeout Calender page' });
            await $("//div[@class='url-view-service']").click()
            const handles = await browser.getWindowHandles()
            await browser.switchToWindow(handles[1])
            await bookingwaitforvalue.waitforteam()

            await $('//li[@id="rdb6f1655193119216"]').click()
            await bookingwaitforvalue.waitfortimezone()

            await $("//div[@class='time-sheet false']/ul/li[1]").click()
            await bookingwaitforvalue.waitfornoprofile()

            await $("//a[@class='btn-link']").click()
            await bookingwaitforvalue.waitforyourinformation()

            await $('//*[@id="name"]/input').setValue(date)
            await $("//div[@class='cta-wrap']/button").click()
            await bookingwaitforvalue.waitforbookanotherservice()

            await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')

            await browser.closeWindow()
            await browser.switchToWindow(handles[0])
        });
})