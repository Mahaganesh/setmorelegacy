const Page = require('./page');


class bookingwaitforvalue extends Page {
    
    async waitforteam ()
    {
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Choose our team',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Booking page header'
            }
        );
    }
    async waitforservice () 
    {
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Your our service',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Booking page header'
            }
        );
    }

    async waitfortimezone ()
    {
        await browser.waitUntil(async () => (await $("//label[@class='g-drop-label']").getText()) === 'Your time zone',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout date and time page'
            }
        );
    }

    async waitfornoprofile () 
    {
        await browser.waitUntil(async () => (await $("//h4[@class='heading-2 text-center']").getText()) === 'No profile yet?',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout signup page'
            }
        );
    }

    async waitforyourinformation () 
    {
        await browser.waitUntil(async () => (await $("//div[@class='booking-heading']/h3").getText()) === 'Your information',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout customer details page'
            }
        );
    }

    async waitforbookanotherservice ()
    {
        await browser.waitUntil(async () => (await $("//button[@data-testid='book-another-appointment']/span").getText()) === 'Book another our service',
            {
                timeout: 30000,
                timeoutMsg: 'Timeout Calender page'
            }
        );
    }
}

module.exports = new bookingwaitforvalue();
