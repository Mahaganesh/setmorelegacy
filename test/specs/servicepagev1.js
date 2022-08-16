const loginn = require('../pageobjects/login.page')



let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Service Legacy', ()=>
{
    it('Create Service', async()=>
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
        await $("//button[@id='addNewService']").click()
        await browser.waitUntil(
            async () => (await $("//input[@id='service_ServiceName']")),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
        await $("//input[@id='service_ServiceName']").setValue(date)
        await $('//*[@id="service_Duration"]').setValue(5)
        await $('//span[@class="selectall"]').click()
        await $('//*[@id="saveNewService"]').click()
        await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        await browser.waitUntil(
            async () => (await $('//*[@id="servicesListHeader"]/ul/li/h3').getText()) === 'All Services',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout page'
            }
        )
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')
    }),

    it('Creating Multiple Service', async()=>
    {
        for(let i=0;i<=5;i++)
        {
            await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
            await $('//*[@id="settingsSideNav"]/ul/li[3]/a/span').click()
            await $("//button[@id='addNewService']").click()
            await browser.waitUntil(
                async () => (await $("//ul[@class='stacked-list service-staff-list span4']/li/div/span/span[@class='selectall']")),
                {
                    timeout: 30000,
                    timeoutMsg: 'Timeout Calender page'
                }
            );
            await $("//input[@id='service_ServiceName']").waitForDisplayed({ reverse: false, timeout: 30000 });
            await $("//input[@id='service_ServiceName']").setValue(date+i)
            await $('//*[@id="service_Duration"]').setValue(5)
            await $("//ul[@class='stacked-list service-staff-list span4']/li/div/span/span[@class='selectall']").click()
            await $('//*[@id="saveNewService"]').click()
            await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
            await browser.waitUntil(
                async () => (await $('//*[@id="servicesListHeader"]/ul/li/h3').getText()) === 'All Services',
                {
                    timeout: 30000,
                    timeoutMsg: 'Timeout page'
                }
            )
            await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
            await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

        }

    })
})