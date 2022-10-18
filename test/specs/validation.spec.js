const loginn = require('../pageobjects/login.page')


describe('validation Check', () => 
{
    it('Checking', async () => 
    {
        await browser.url('/')
        await loginn.login('mahaganesh2@setmore.com', 'I2password@97')
        // await waitforvalue.waitforcalender()
        // await waitforvalue.waitforerrormsg()
    });
});
