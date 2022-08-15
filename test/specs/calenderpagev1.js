const loginn = require('../pageobjects/login.page')


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Service Legacy', () =>
{
    xit('Create appointment from calender page', async () =>
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
        await browser.waitUntil(async () => (await $("//div[@id='cal-date']").getText()),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        )
        await $("//div[@id='cal-date']").click()
        let a = await $$("//table/tbody/tr/td/table/tbody[@class='datepickerDays']/tr")
        for(let i=1;i<a.length;i++)
        {
            console.log(await a[i].$('/td/a/span[1]').length)
            // for(let j=1;j<=a[i].length;j++)
            // {
            //     console.log(j)
            //     console.log("//table/tbody/tr/td/table/tbody[@class='datepickerDays']/tr["+i+"]/td/a/span")
                // console.log(await $("//table/tbody/tr/td/table/tbody[@class='datepickerDays']/tr["+i+"]/td/a/span").getText())

                // if(await $('//tbody[@class="datepickerDays"]/tr['+i+']/td/a/span').getText() == 9)
                // {
                //     await $('//tbody[@class="datepickerDays"]/tr['+i+']/td/a/span').click()
                
                // }
            // }
        }
        await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

    }),
    xit('Calender page select date', async ()=>
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await browser.waitUntil(async () => (await $("//h1[@class='left page-name']").getText()) === 'Calendar',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        )
        await browser.waitUntil(async () => (await $("//div[@id='cal-date']").getText()),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        )
        let a = await $$("//div[@class='staff-tab-view']/ul/li/a/span")
        for(let i=1;i<a.length;i++)
        {
            // console.log(await a[i].getText())

            if(await a[i].getText() == 'User2123'.toUpperCase())
            {
                await a[i].click()
                await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
                break
            }
        }
        await browser.saveScreenshot('/Users/mahaganesh/PythonProjects/Auto-Testing/screenshot/'+date+'screenshot.png')
        let timing = $$("//table[@class='fc-agenda-slots']/tbody/tr")
        for(let i=1;i<timing.length;i++)
        {
            console.log(typeof(await timing[i].$("th[@class='fc-agenda-axis fc-widget-header']").getText()))
        }


    })
})

