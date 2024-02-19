const assert = require('assert');
const {batteryIsOk, SetLanguage} = require('../bms-monitor')
const {getLog} = require('../bms-log')
const {ParameterTest} = require('./bms-test-checkStatus')
const {BatteryTest} = require('./bms-test-batteryIsOk')
const {ConversionTest} = require('./bms-test-convertParameterInputs')

describe("Battery Monitor System Test", () => {
    after(()=>{
        console.table(getLog())
    })
    ConversionTest()
    ParameterTest()
    BatteryTest()
})
