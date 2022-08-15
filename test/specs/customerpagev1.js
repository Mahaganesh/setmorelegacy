const loginn = require('../pageobjects/login.page')



let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Customer page', () => 
{
    xit('Create customer', async () => 
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
        await $("//a[@id='side-nav-customers']").click()
        await browser.waitUntil(
            async () => (await $('//ul[@id="customerList"]')),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Service page'
            }
        );
        await $("//a[@id='newCustomer']").click()
        await browser.waitUntil(async () => (await $("//input[@id='customerNewName']")),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Service page'
            }
        );
        await $("//input[@id='customerNewName']").setValue(date)
        await $("//button[@id='addnewCustomer']").click()
        await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        // await $('//ul[@id="customerList"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

    });
    xit('Creating multiple customers', async() => {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        // await WaitUntill.WaitUntil2("//h1[@class='left page-name']", 'Calendar')

        await browser.waitUntil(async () => (await $("//h1[@class='left page-name']").getText()) === 'Calendar',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        )
        await $("//a[@id='side-nav-customers']").click()
        await browser.waitUntil(
            async () => (await $('//ul[@id="customerList"]')),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Service page'
            }
        );
        for(let i=0;i<=5;i++)
        {
            await $("//a[@id='newCustomer']").click()
            await browser.waitUntil(async () => (await $("//input[@id='customerNewName']")),
                {
                    timeout: 30000,
                    timeoutMsg: 'Timeout Service page'
                }
            );
            await $("//input[@id='customerNewName']").setValue(date+1)
            await $("//button[@id='addnewCustomer']").click()
            await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        }
            await browser.saveScreenshot('screenshot/'+date+'screenshot.png')


    });
    
});