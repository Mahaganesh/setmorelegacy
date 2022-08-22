const loginn = require('../pageobjects/login.page')
const waitforvalue = require('../pageobjects/wait.page')

let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Setmore Service Legacy', () =>
{
    xit('Create appointment from calender page', async () =>
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await waitforvalue.waitforcalender()
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
        await waitforvalue.waitforerrormsg()
        await browser.saveScreenshot('screenshot/'+date+'screenshot.png')

    }),
    xit('Calender page select date', async ()=>
    {
        await browser.url('/')
        // await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await waitforvalue.waitforcalender()
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
                await waitforvalue.waitforerrormsg()
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

