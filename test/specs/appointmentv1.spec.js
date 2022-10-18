const loginn = require('../pageobjects/login.page')
const waitforvalue = require('../pageobjects/wait.page')


let date = new Date();
date.setSeconds(date.getSeconds());

describe('Appointment Booking', () => 
{
    xit('Appointment created from customer page', async () => 
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await waitforvalue.waitforcalender()
        await $("//a[@id='side-nav-customers']").click()
        await waitforvalue.waitforcustomerlist()
        await $("//a[@id='newCustomer']").click()
        await browser.waitUntil(async () => (await $("//input[@id='customerNewName']")),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Service page'
            }
        );
        await $("//input[@id='customerNewName']").setValue(date)
        await $("//button[@id='addnewCustomer']").click()
        await waitforvalue.waitforerrormsg()
        await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')

    });
})