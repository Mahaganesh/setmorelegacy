const loginn = require('../pageobjects/login.page')



let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Staff Legacy', ()=>
{
    it('Create Staff', async ()=>
    {
        await browser.url('/')
        await loginn.login('maha21.setmore@gmail.com', 'I2password@97')
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
    
        for(let i=0;i<5;i++)
        {
            await $('//*[@id="newPlusIcon"]').click()
            await $('//*[@id="staffNewName"]').setValue('Testuser12'+i)
            await $('//*[@id="addstaff"]').click()
            await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        }
        // await $("//input[@id='service_ServiceName']").setValue(date)
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')
    }),

    it('Delete Staff', async ()=>
    {
        let a = await $$("//ul[@id='resource-list']/li/a/span")
        console.log(a.length)
        // console.log(await a[19].getText())
        for(let i=0;i<a.length;i++)
        {
            console.log(await a[i].getText())
            if(await $('//ul/li/a/span[@title="'+ 'Testuser12'+i +'"]'))
                {
                    await a[i].click()
                    await $('//*[@id="btn-for-staffdelete"]').click()
                    await $('//*[@id="delete-confirmation-btn"]').click()
                    await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
                }
        }
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

    })
})