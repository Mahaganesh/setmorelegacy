const merge = require('deepmerge')
const wdioconf = require('./wdio.conf')

exports.config = merge(wdioconf.config,{
    suites: {

       validation : ['./test/specs/validation.spec.js'],
    }
})