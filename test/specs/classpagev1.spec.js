const loginn = require('../pageobjects/login.page')
const waitforvalue = require('../pageobjects/wait.page')


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Class Legacy', ()=>
{
    it('Create Class', async()=>
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await waitforvalue.waitforcalender()
        await $("//a[@class='settings-icon']").click()
        await waitforvalue.waitforservice()
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
        await waitforvalue.waitforerrormsg()
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