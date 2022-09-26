const loginn = require('../pageobjects/login.page');
const { waitforcustomerlist } = require('../pageobjects/wait.page');
const waitforvalue = require('../pageobjects/wait.page')


let date = new Date();
date.setSeconds(date.getSeconds() + 70);

describe('Customer page', () => {
    it('Create customer', async () => {
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
        await $("//input[@id='customerNewEmail']").setValue('mahaganesh@gmail.com')
        await $("//button[@id='addnewCustomer']").click()
        await waitforvalue.waitforerrormsg()
        await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')

    });

    it('Creating multiple customers', async () => {
        await browser.url('/')
        // await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        await waitforvalue.waitforcalender()
        await $("//a[@id='side-nav-customers']").click()
        await waitforvalue.waitforcustomerlist()
        for (let i = 0; i <= 5; i++) {
            await $("//a[@id='newCustomer']").click()
            await browser.waitUntil(async () => (await $("//input[@id='customerNewName']")),
                {
                    timeout: 30000,
                    timeoutMsg: 'Timeout Service page'
                }
            );
            await $("//input[@id='customerNewName']").setValue(date + 1)
            await $("//button[@id='addnewCustomer']").click()
            await waitforvalue.waitforerrormsg()
        }
        await browser.saveScreenshot('screenshot/' + date + 'screenshot.png')


    });

});