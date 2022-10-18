const Page = require('./page');


class calenderwaitforvalue extends Page {

    async waitforcalenderdate() {
        await browser.waitUntil(async () => (await $("//div[@id='cal-date']").getText()),
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
    }
}

module.exports = new calenderwaitforvalue();
