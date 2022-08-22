const Page = require('./page');

class Waitforvalue extends Page {
    async waitforcalender() {
        await browser.waitUntil(async () => (await $("//h1[@class='left page-name']").getText()) === 'Calendar',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        )
    }

    async waitforservice() {
        await browser.waitUntil(
            async () => (await $('//*[@id="settingsSideNav"]/ul/li[3]/a/span').getText()) === 'Services',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Service page'
            }
        );
    }

    async waitforcustomerlist() {
        await browser.waitUntil(
            async () => (await $('//ul[@id="customerList"]')),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Service page'
            }
        );
    }

    async waitforerrormsg() 
    {
        await $('//*[@id="voice-box"]').waitForDisplayed({ reverse: true, timeout: 30000 });
    }

    async waitforallservice()
    {
        await browser.waitUntil(
            async () => (await $('//*[@id="servicesListHeader"]/ul/li/h3').getText()) === 'All Services',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout page'
            }
        )
    }
}

module.exports = new Waitforvalue();
