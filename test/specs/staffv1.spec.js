const loginn = require('../pageobjects/login.page')
const waitforvalue = require('../pageobjects/wait.page')


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Staff Legacy', () => {
    xit('Create Staff', async () => {
        await browser.url('/')
        await loginn.login('maha21.setmore@gmail.com', 'I2password@97')
        await waitforvalue.waitforcalender()
        await waitforvalue.waitforerrormsg()
        await $("//a[@class='settings-icon']").click()
        await waitforvalue.waitforallservice()

        for (let i = 0; i < 5; i++) {
            await $('//*[@id="newPlusIcon"]').click()
            await $('//*[@id="staffNewName"]').setValue('Testuser12' + i)
            await $('//*[@id="addstaff"]').click()
            await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        }
        await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')
    }),

        xit('Delete Staff', async () => {
            let a = await $$("//ul[@id='resource-list']/li/a/span")
            console.log(a.length)
            for (let i = 0; i < a.length; i++) {
                console.log(await a[i].getText())
                if (await $('//ul/li/a/span[@title="' + 'Testuser12' + i + '"]')) {
                    await a[i].click()
                    await $('//*[@id="btn-for-staffdelete"]').click()
                    await $('//*[@id="delete-confirmation-btn"]').click()
                    await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
                }
            }
            await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')

        })
})