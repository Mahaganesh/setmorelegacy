const merge = require('deepmerge')
const wdioConf = require('./wdio.conf')
// const w  = require('./test/specs/bookingpagev1.spec')

exports.config = merge(wdioConf.config,
    {
    suites: [
        './test/specs/bookingpagev1.spec.js'
    ],
})